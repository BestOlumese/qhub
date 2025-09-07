import { ModuleData } from '@/types/courseTypes';

// Calculate total number of lessons in all modules
export const getTotalLessonsCount = (modulesData: ModuleData[]): number => {
  return modulesData.reduce((total, module) => {
    return total + (module.lessons?.length || 0);
  }, 0);
};

// Calculate progress percentage based on completed lessons
export const calculateCourseProgress = (
  completedLessonsCount: number,
  totalLessons: number
): number => {
  if (totalLessons === 0) return 0;
  
  // Ensure we don't exceed 100% and round to 1 decimal place
  const progress = Math.min((completedLessonsCount / totalLessons) * 100, 100);
  return Math.round(progress * 10) / 10; // Round to 1 decimal place
};

// Alternative progress calculation methods for testing
export const calculateProgressAlternative = {
  // Method 1: Simple percentage (current method)
  simple: (completedCount: number, totalCount: number): number => {
    if (totalCount === 0) return 0;
    return Math.round(((completedCount / totalCount) * 100) * 10) / 10;
  },

  // Method 2: Module-weighted progress
  moduleWeighted: (modulesData: ModuleData[], completedLessons: string[]): number => {
    if (modulesData.length === 0) return 0;
    
    let totalModuleProgress = 0;
    let validModules = 0;

    modulesData.forEach(module => {
      if (module.lessons && module.lessons.length > 0) {
        const moduleCompletedCount = module.lessons.filter(lesson => 
          completedLessons.includes(lesson._id)
        ).length;
        
        const moduleProgress = (moduleCompletedCount / module.lessons.length) * 100;
        totalModuleProgress += moduleProgress;
        validModules++;
      }
    });

    return validModules > 0 ? Math.round((totalModuleProgress / validModules) * 10) / 10 : 0;
  },

  // Method 3: Index-based weighting (if lessons have different weights)
  indexWeighted: (modulesData: ModuleData[], completedLessons: string[]): number => {
    const allLessons = modulesData.reduce((acc, module) => {
      return [...acc, ...(module.lessons || [])];
    }, [] as any[]);

    if (allLessons.length === 0) return 0;

    // Sort lessons by index to ensure proper order
    allLessons.sort((a, b) => a.index - b.index);
    
    const completedCount = completedLessons.length;
    const totalCount = allLessons.length;
    
    return Math.round(((completedCount / totalCount) * 100) * 10) / 10;
  }
};

// Get lesson details by lesson ID
export const findLessonById = (
  modulesData: ModuleData[],
  lessonId: string
): { lesson: any; moduleId: string; moduleIndex: number; lessonIndex: number } | null => {
  for (let moduleIndex = 0; moduleIndex < modulesData.length; moduleIndex++) {
    const module = modulesData[moduleIndex];
    if (module.lessons) {
      for (let lessonIndex = 0; lessonIndex < module.lessons.length; lessonIndex++) {
        const lesson = module.lessons[lessonIndex];
        if (lesson._id === lessonId) {
          return { 
            lesson, 
            moduleId: module._id, 
            moduleIndex, 
            lessonIndex 
          };
        }
      }
    }
  }
  return null;
};

// Track completed lessons in localStorage (fallback storage)
const COMPLETED_LESSONS_KEY = 'completedLessons';

export const getCompletedLessonsFromStorage = (courseId: string): string[] => {
  try {
    const stored = localStorage.getItem(`${COMPLETED_LESSONS_KEY}_${courseId}`);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading completed lessons from storage:', error);
    return [];
  }
};

export const saveCompletedLessonToStorage = (courseId: string, lessonId: string): void => {
  try {
    const completed = getCompletedLessonsFromStorage(courseId);
    if (!completed.includes(lessonId)) {
      completed.push(lessonId);
      localStorage.setItem(`${COMPLETED_LESSONS_KEY}_${courseId}`, JSON.stringify(completed));
    }
  } catch (error) {
    console.error('Error saving completed lesson to storage:', error);
  }
};

// Clear completed lessons (for testing/reset)
export const clearCompletedLessonsFromStorage = (courseId: string): void => {
  try {
    localStorage.removeItem(`${COMPLETED_LESSONS_KEY}_${courseId}`);
  } catch (error) {
    console.error('Error clearing completed lessons from storage:', error);
  }
};

// Video progress tracking utilities
export const isVideoWatched80Percent = (currentTime: number, duration: number): boolean => {
  if (duration === 0) return false;
  const watchedPercentage = (currentTime / duration) * 100;
  return watchedPercentage >= 80;
};

// Debounce function for progress updates
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Validate lesson completion data
export const validateLessonCompletion = (
  modulesData: ModuleData[],
  completedLessons: string[]
): {
  validCompletions: string[];
  invalidCompletions: string[];
  duplicates: string[];
} => {
  const allValidLessonIds = modulesData.reduce((acc, module) => {
    return [...acc, ...(module.lessons?.map(l => l._id) || [])];
  }, [] as string[]);

  const validCompletions = completedLessons.filter(id => allValidLessonIds.includes(id));
  const invalidCompletions = completedLessons.filter(id => !allValidLessonIds.includes(id));
  
  // Find duplicates
  const seen = new Set();
  const duplicates: string[] = [];
  completedLessons.forEach(id => {
    if (seen.has(id)) {
      duplicates.push(id);
    } else {
      seen.add(id);
    }
  });

  return {
    validCompletions,
    invalidCompletions,
    duplicates
  };
};