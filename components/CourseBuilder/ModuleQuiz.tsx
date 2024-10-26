import { Lesson, Quiz } from "@/lib/types";
import React from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
const ModuleQuiz = ({
  quizIndex,
  handleClick,
  quiz,
  onDelete,
}: {
  quizIndex: number;
  handleClick: (quiz: Quiz) => void;
  quiz: Quiz;
  onDelete: (id: string) => void;
}) => {
  return (
    <div
      onClick={() => handleClick(quiz)}
      className="bg-white border border-green-500 rounded-md p-3 flex items-center cursor-pointer justify-between"
    >
      <h2 className="">
        Quiz {quizIndex + 1}: <b className="capitalize">{quiz.name}</b>
      </h2>
      <div className="flex items-center gap-2 text-gray-600">
        <IconEdit className="w-4 h-4 hover:text-gray-700" />
        <IconTrash
          className="w-4 h-4 hover:text-gray-700"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(quiz.id);
          }}
        />
      </div>
    </div>
  );
};

export default ModuleQuiz;
