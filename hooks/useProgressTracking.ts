// hooks/useProgressTracking.ts
import { useMutation } from '@apollo/client';
import { UPDATE_COURSE_ENROLLMENT } from '@/lib/graphql';
import { useState, useCallback, useRef } from 'react';
import toast from 'react-hot-toast';

interface UseProgressTrackingProps {
  courseId: string;
  totalLessons: number;
  initialProgress?: number;
}

interface UseProgressTrackingReturn {
  courseProgress: number;
  handleVideoProgress: (lessonId: string, currentTime: number, duration: number) => void;
  loading: boolean;
}

export const useProgressTracking = ({
  courseId,
  totalLessons,
  initialProgress = 0
}: UseProgressTrackingProps): UseProgressTrackingReturn => {
  const [progress, setProgress] = useState(initialProgress);
  const [loading, setLoading] = useState(false);
  const processedLessons = useRef<Set<string>>(new Set());

  const [updateCourseEnrollment] = useMutation(UPDATE_COURSE_ENROLLMENT, {
    onError: (error) => {
      console.error('GraphQL Error:', error);
      toast.error('Failed to update progress. Please try again.');
    }
  });

  const handleVideoProgress = useCallback((
    lessonId: string,
    currentTime: number,
    duration: number
  ) => {
    // Avoid processing the same lesson multiple times
    if (processedLessons.current.has(lessonId) || duration === 0) return;

    // Check if video is watched 80% or more
    if ((currentTime / duration) >= 0.8) {
      processedLessons.current.add(lessonId);
      
      // Calculate new progress based on how many lessons have been processed
      const completedLessons = processedLessons.current.size;
      const newProgress = (completedLessons / totalLessons) * 100;
      const isCompleted = newProgress === 100;

      // Update progress in backend
      setLoading(true);
      updateCourseEnrollment({
        variables: {
          courseId,
          updateCourseEnrollmentInput: {
            progress: parseFloat(newProgress.toFixed(1)),
            // completed: isCompleted
          }
        }
      }).then(() => {
        setProgress(newProgress);
        setLoading(false);
        
        if (isCompleted) {
          toast.success('🎉 Congratulations! You have completed the course!');
        } else if (newProgress > initialProgress) {
          toast.success(`Progress updated: ${newProgress.toFixed(1)}%`);
        }
      }).catch(() => {
        setLoading(false);
      });
    }
  }, [courseId, totalLessons, initialProgress, updateCourseEnrollment]);

  return {
    courseProgress: progress,
    handleVideoProgress,
    loading
  };
};