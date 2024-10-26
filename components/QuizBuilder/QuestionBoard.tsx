import { Question } from "@/lib/types";
import React from "react";
import { questionTypes } from "@/lib/adminData";
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconCirclePlus } from "@tabler/icons-react";
import { Button } from "../ui/button";
const QuestionBoard = ({
  questions,
  onEdit,
  onDelete,
  onAdd,
}: {
  questions: Question[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  onAdd: () => void;
}) => {
  return (
    <div className="bg-gray-200 rounded-md p-4 flex flex-col gap-2">
      {questions.length > 0 ? (
        questions.map((question, index) => {
          const activeQuestionType = questionTypes.find(
            (questionType) => questionType.value === question.questionType
          );
          return (
            <div
              className="bg-white flex w-full p-4 rounded-md items-center"
              key={index}
            >
              <h2 className="flex-1">Question {index + 1}</h2>
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-md flex items-center justify-center ${activeQuestionType?.color} text-white`}
                >
                  {activeQuestionType?.icon}
                </div>
                <p className="text-sm">{activeQuestionType?.type}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0 ml-4">
                    <span className="sr-only">Open menu</span>
                    <IconDotsVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    className="flex gap-2 items-center"
                    onClick={() => onEdit(index)}
                  >
                    <IconEdit className="w-4 h-4" /> Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:!text-red-500 flex gap-2 items-center"
                    onClick={() => onDelete(index)}
                  >
                    <IconTrash className="w-4 h-4" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          );
        })
      ) : (
        <p>No questions added yet</p>
      )}
      <button
        className="bg-primary w-fit text-sm mt-2 text-white px-4 p-2 rounded-md flex items-center "
        onClick={onAdd}
      >
        <IconCirclePlus className="inline mr-2 w-5 h-5" />
        Add New Question
      </button>
    </div>
  );
};

export default QuestionBoard;
