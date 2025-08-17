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
  onDeleteLesson?: (lessonId: string) => void; // Add lesson deletion handler
  onDeleteQuiz?: (quizId: string) => void; // Add quiz deletion handler for future use
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
  onDeleteLesson,
  onDeleteQuiz,
}: ModuleItemProps) => {
  const handleDeleteLesson = (e: React.MouseEvent, lesson: Lesson) => {
    e.stopPropagation(); // Prevent triggering edit when delete is clicked
    
    if (window.confirm(`Are you sure you want to delete "${lesson.name}"?`)) {
      const lessonId = lesson._id || lesson.id; // Use server ID if available, fallback to local ID
      onDeleteLesson?.(lessonId);
    }
  };

  const handleDeleteQuiz = (e: React.MouseEvent, quiz: Quiz) => {
    e.stopPropagation(); // Prevent triggering edit when delete is clicked
    
    if (window.confirm(`Are you sure you want to delete "${quiz.name}"?`)) {
      const quizId = quiz._id || quiz.id; // Use server ID if available, fallback to local ID
      onDeleteQuiz?.(quizId);
    }
  };

  const getModuleId = () => {
    return module._id || module.id; // Use server ID if available, fallback to local ID
  };

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
                e.stopPropagation();
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
                e.stopPropagation();
                if (window.confirm(`Are you sure you want to delete "${module.name}"?`)) {
                  onDelete();
                }
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
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Lessons ({module.lessons.length})
            </h4>
            <div className="space-y-2">
              {module.lessons.map((lesson, index) => (
                <div
                  key={lesson._id || lesson.id} // Use server ID if available
                  className="bg-white rounded-md p-3 flex items-center justify-between border border-gray-200 hover:bg-gray-50 transition-colors group"
                >
                  <div
                    onClick={() => onEditLesson(lesson)}
                    className="flex-1 cursor-pointer"
                  >
                    <span className="text-sm text-gray-500">
                      Lesson {index + 1}:
                    </span>
                    <span className="ml-2 font-medium">{lesson.name}</span>
                    {lesson.content && (
                      <div className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {lesson.content.replace(/<[^>]*>/g, '').substring(0, 100)}...
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {lesson.duration && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {lesson.duration} min
                      </span>
                    )}
                    {lesson.video && (
                      <span className="text-xs text-blue-500 bg-blue-100 px-2 py-1 rounded">
                        Video
                      </span>
                    )}
                    {lesson.exerciseFiles && lesson.exerciseFiles.length > 0 && (
                      <span className="text-xs text-green-500 bg-green-100 px-2 py-1 rounded">
                        {lesson.exerciseFiles.length} files
                      </span>
                    )}
                    {onDeleteLesson && (
                      <button
                        onClick={(e) => handleDeleteLesson(e, lesson)}
                        className="text-gray-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
                        aria-label={`Delete lesson ${lesson.name}`}
                        title="Delete lesson"
                      >
                        <IconTrash className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {module.quizzes && module.quizzes.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Quizzes ({module.quizzes.length})
            </h4>
            <div className="space-y-2">
              {module.quizzes.map((quiz, index) => (
                <div
                  key={quiz._id || quiz.id} // Use server ID if available
                  className="bg-white rounded-md p-3 flex items-center justify-between border border-green-200 hover:bg-green-50 transition-colors group"
                >
                  <div
                    onClick={() => onEditQuiz(quiz)}
                    className="flex-1 cursor-pointer"
                  >
                    <span className="text-sm text-gray-500">
                      Quiz {index + 1}:
                    </span>
                    <span className="ml-2 font-medium">{quiz.name}</span>
                    {quiz.description && (
                      <div className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {quiz.description.substring(0, 100)}...
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {quiz.questions && (
                      <span className="text-xs text-gray-500 bg-green-100 px-2 py-1 rounded">
                        {quiz.questions.length} questions
                      </span>
                    )}
                    {quiz.timeLimit && (
                      <span className="text-xs text-orange-500 bg-orange-100 px-2 py-1 rounded">
                        {quiz.timeLimit} min
                      </span>
                    )}
                    {onDeleteQuiz && (
                      <button
                        onClick={(e) => handleDeleteQuiz(e, quiz)}
                        className="text-gray-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
                        aria-label={`Delete quiz ${quiz.name}`}
                        title="Delete quiz"
                      >
                        <IconTrash className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <ModuleItemCategories
          onAddLesson={() => onAddLesson(getModuleId())}
          onAddQuiz={() => onAddQuiz(getModuleId())}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default ModuleItem;