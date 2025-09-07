import { useState, useCallback, useRef, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_COURSE_ENROLLMENT } from '@/lib/graphql';
import {
  getTotalLessonsCount,
  calculateCourseProgress,
  findLessonById,
  getCompletedLessonsFromStorage,
  saveCompletedLessonToStorage,
  isVideoWatched80Percent,
  debounce
} from '@/utils/progressUtils';
import { ModuleData } from '@/types/courseTypes';
import toast from 'react-hot-toast';

interface UseProgressTrackingProps {
  courseId: string;
  modulesData: ModuleData[];
  initialProgress?: number; // Pass existing progress from parent
}

interface UseProgressTrackingReturn {
  completedLessons: string[];
  courseProgress: number;
  totalLessons: number;
  handleVideoProgress: (lessonId: string, currentTime: number, duration: number) => void;
  markLessonComplete: (lessonId: string) => Promise<void>;
  isLessonCompleted: (lessonId: string) => boolean;
  updateProgress: () => Promise<void>;
  loading: boolean;
  error: any;
}

export const useProgressTracking = ({
  courseId,
  modulesData,
  initialProgress = 0
}: UseProgressTrackingProps): UseProgressTrackingReturn => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const watchedLessonsRef = useRef(new Set<string>());

  const totalLessons = getTotalLessonsCount(modulesData);
  const courseProgress = calculateCourseProgress(completedLessons.length, totalLessons);

  // Initialize completed lessons from localStorage on mount
  useEffect(() => {
    if (courseId) {
      const localCompleted = getCompletedLessonsFromStorage(courseId);
      setCompletedLessons(localCompleted);
    }
  }, [courseId]);

  // GraphQL mutation - only using your endpoint
  const [updateCourseEnrollment] = useMutation(UPDATE_COURSE_ENROLLMENT, {
    onError: (error) => {
      console.error('GraphQL Error:', error);
      setError(error);
      toast.error('Failed to update progress. Please try again.');
    }
  });

  // Update course progress in the backend using only your endpoint
  const updateProgress = useCallback(async () => {
    if (!courseId || totalLessons === 0) return;

    const newProgress = calculateCourseProgress(completedLessons.length, totalLessons);

    try {
      setLoading(true);
      setError(null);

      console.log('Updating progress:', {
        courseId,
        progress: newProgress,
        completedLessons: completedLessons.length,
        totalLessons
      });

      const result = await updateCourseEnrollment({
        variables: {
          courseId,
          updateCourseEnrollmentInput: {
            progress: parseFloat(newProgress.toFixed(1))
          }
        }
      });

      console.log('Progress updated successfully:', result.data);

      if (newProgress === 100 && newProgress > (initialProgress || 0)) {
        toast.success('🎉 Congratulations! You have completed the course!');
      } else if (newProgress > (initialProgress || 0)) {
        toast.success(`Progress updated: ${newProgress}%`);
      }
    } catch (error) {
      console.error('Error updating course progress:', error);
      setError(error);
      toast.error('Failed to update progress. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [courseId, completedLessons.length, totalLessons, updateCourseEnrollment, initialProgress]);

  // Debounced progress update to avoid too frequent API calls
  const debouncedUpdateProgress = useCallback(
    debounce(updateProgress, 2000),
    [updateProgress]
  );

  // Mark a lesson as complete
  const markLessonComplete = useCallback(async (lessonId: string) => {
    if (completedLessons.includes(lessonId)) return;

    const lessonDetails = findLessonById(modulesData, lessonId);
    if (!lessonDetails) return;

    // Update local state
    setCompletedLessons(prev => [...prev, lessonId]);
    
    // Save to localStorage as backup
    saveCompletedLessonToStorage(courseId, lessonId);
    
    // Update progress in backend using your endpoint
    debouncedUpdateProgress();

    toast.success(`✅ Lesson "${lessonDetails.lesson.name}" completed!`);
  }, [completedLessons, modulesData, courseId, debouncedUpdateProgress]);

  // Handle video progress and auto-mark completion at 80%
  const handleVideoProgress = useCallback((
    lessonId: string,
    currentTime: number,
    duration: number
  ) => {
    // Avoid marking the same lesson multiple times
    if (watchedLessonsRef.current.has(lessonId)) return;

    // Check if video is watched 80% or more
    if (isVideoWatched80Percent(currentTime, duration)) {
      watchedLessonsRef.current.add(lessonId);
      markLessonComplete(lessonId);
    }
  }, [markLessonComplete]);

  // Check if a lesson is completed
  const isLessonCompleted = useCallback((lessonId: string) => {
    return completedLessons.includes(lessonId);
  }, [completedLessons]);

  return {
    completedLessons,
    courseProgress,
    totalLessons,
    handleVideoProgress,
    markLessonComplete,
    isLessonCompleted,
    updateProgress,
    loading,
    error
  };
};