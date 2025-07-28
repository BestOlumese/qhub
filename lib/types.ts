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
  duration: any;
  id: string;
  name: string;
  content: string;
  featuredImage: string;
  video: string;
  exerciseFiles: string[];
}
export interface Quiz {
  id: string;
  name: string;
  summary: string;
  questions: Question[];
}
export interface Module {
  id: string;
  name: string;
  summary?: string;
  lessons?: Lesson[];
  quizzes?: Quiz[];
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
