// Course-related type definitions

export interface CourseData {
  _id: string;
  title: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  duration: number;
  description: string;
  displayImageUrl: string;
  introVideoUrl: string;
}

export interface LessonData {
  _id: string;
  contentUrl: string;
  createdAt: string;
  extraResourcesUrl: string;
  imageUrl: string;
  index: number;
  name: string;
  updatedAt: string;
  videoUrl: string;
}

export interface ModuleData {
  _id: string;
  name: string;
  summary: string;
  course: CourseData;
  lessons: LessonData[];
  createdAt: string;
  updatedAt: string;
}

// Progress tracking types
export interface CourseEnrollment {
  _id: string;
  completed: boolean;
  course: CourseData;
  progress: number;
  createdAt: string;
  updatedAt: string;
  user: {
    _id: string;
  };
}

export interface UpdateCourseEnrollmentInput {
  progress: number;
  completed?: boolean;
}

// Video player types
export interface PlayingVideo {
  url: string;
  lessonName: string;
  lessonId: string;
  resources: string[];
}

// Progress tracking hook return types
export interface ProgressTrackingReturn {
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