export interface UserInputs {
  employeeNo: string;
  country: string;
  state: string;
  logo: string;
  address: string;
  city: string;
  zipCode: string;
  website: string;
  name: string;
}
export type Employee = {
  id: string;
  name: string;
  role: string;
  status: string;
  email: string;
};
export interface Lesson {
  id: string; // Local ID (UUID)
  _id?: string; // Server ID (from MongoDB)
  name: string;
  content: string;
  featuredImage?: string;
  video?: string;
  exerciseFiles?: string[];
  duration?: number;
  index?: number;
  moduleId?: string; // Module ID this lesson belongs to
  createdAt?: string;
  updatedAt?: string;
}
export interface Quiz {
  id: string;
  name: string;
  summary: string;
  questions: Question[];
}
export interface Module {
  id: string; // Local ID (UUID)
  _id?: string; // Server ID (from MongoDB)
  name: string;
  summary: string;
  lessons?: Lesson[];
  quizzes?: any[];
  courseId?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface Option {
  id: string;
  name: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  question: string;
  questionType: string;
  points: number;
  description: string;
  options: Option[];
  answerExplanation: string;
}

export interface AppContextType {
  modules: Module[];
  setModules: React.Dispatch<React.SetStateAction<Module[]>>;
}

export interface Course {
  id: string;
  name: string;
  category: string;
  duration: string;
  students: string;
  startDate: string;
  endDate: string;
}
