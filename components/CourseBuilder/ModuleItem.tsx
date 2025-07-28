// ModuleItem.tsx
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import ModuleItemCategories from "./ModuleItemCategories";
import { Module, Lesson, Quiz } from "@/lib/types";

interface ModuleItemProps {
  module: Module;
  moduleIndex: number;
  onEdit: () => void;
  onDelete: () => void;
  onAddLesson: (moduleId: string) => void;
  onAddQuiz: (moduleId: string) => void;
  onEditLesson: (lesson: Lesson) => void;
  onEditQuiz: (quiz: Quiz) => void;
}

const ModuleItem = ({
  module,
  moduleIndex,
  onEdit,
  onDelete,
  onAddLesson,
  onAddQuiz,
  onEditLesson,
  onEditQuiz,
}: ModuleItemProps) => {
  return (
    <AccordionItem
      value={`module-${moduleIndex}`}
      className="bg-gray-100 rounded-lg border border-gray-200 shadow-sm"
    >
      <AccordionTrigger className="hover:no-underline px-4 py-3">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-500">
              Module {moduleIndex + 1}
            </span>
            <h3 className="text-lg font-medium text-gray-900">{module.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                onEdit();
              }}
              className="text-gray-500 hover:text-blue-600 transition-colors"
              aria-label="Edit module"
            >
              <IconEdit className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                onDelete();
              }}
              className="text-gray-500 hover:text-red-600 transition-colors"
              aria-label="Delete module"
            >
              <IconTrash className="w-5 h-5" />
            </button>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-4 pt-2">
        {module.summary && (
          <p className="text-sm text-gray-600 mb-4">{module.summary}</p>
        )}

        {module.lessons && module.lessons.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Lessons</h4>
            <div className="space-y-2">
              {module.lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  onClick={() => onEditLesson(lesson)}
                  className="bg-white rounded-md p-3 flex items-center justify-between border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div>
                    <span className="text-sm text-gray-500">
                      Lesson {index + 1}:
                    </span>
                    <span className="ml-2 font-medium">{lesson.name}</span>
                  </div>
                  {lesson.duration && (
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {lesson.duration}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {module.quizzes && module.quizzes.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Quizzes</h4>
            <div className="space-y-2">
              {module.quizzes.map((quiz, index) => (
                <div
                  key={quiz.id}
                  onClick={() => onEditQuiz(quiz)}
                  className="bg-white rounded-md p-3 flex items-center justify-between border border-green-200 hover:bg-green-50 cursor-pointer transition-colors"
                >
                  <div>
                    <span className="text-sm text-gray-500">
                      Quiz {index + 1}:
                    </span>
                    <span className="ml-2 font-medium">{quiz.name}</span>
                  </div>
                  {quiz.questions && (
                    <span className="text-xs text-gray-500 bg-green-100 px-2 py-1 rounded">
                      {quiz.questions.length} questions
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <ModuleItemCategories
          onAddLesson={() => onAddLesson(module.id)}
          onAddQuiz={() => onAddQuiz(module.id)}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default ModuleItem;
