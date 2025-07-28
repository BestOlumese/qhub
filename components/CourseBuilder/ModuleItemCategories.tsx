// ModuleItemCategories.tsx
import React from "react";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";

interface ModuleItemCategoriesProps {
  onAddLesson: () => void;
  onAddQuiz: () => void;
}

const ModuleItemCategories = ({ 
  onAddLesson, 
  onAddQuiz 
}: ModuleItemCategoriesProps) => {
  return (
    <div className="flex gap-3 pt-2">
      <button
        type="button"
        onClick={onAddLesson}
        className="flex items-center gap-2 text-sm border border-blue-500 text-blue-600 hover:bg-blue-50 capitalize px-3 py-2 rounded-md transition-colors"
      >
        <IconSquareRoundedPlusFilled className="w-5 h-5 text-blue-500" />
        Add Lesson
      </button>
      <button
        type="button"
        onClick={onAddQuiz}
        className="flex items-center gap-2 text-sm border border-green-500 text-green-600 hover:bg-green-50 capitalize px-3 py-2 rounded-md transition-colors"
      >
        <IconSquareRoundedPlusFilled className="w-5 h-5 text-green-500" />
        Add Quiz
      </button>
    </div>
  );
};

export default ModuleItemCategories;