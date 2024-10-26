import { Lesson } from "@/lib/types";
import React from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
const ModuleLesson = ({
  lessonIndex,
  handleClick,
  lesson,
  onDelete,
}: {
  lessonIndex: number;
  handleClick: (lesson: Lesson) => void;
  lesson: Lesson;
  onDelete: (id: string) => void;
}) => {
  return (
    <div
      onClick={() => handleClick(lesson)}
      className="bg-white rounded-md p-3 flex items-center cursor-pointer justify-between"
    >
      <h2 className="">
        Lesson {lessonIndex + 1}: <b className="capitalize">{lesson.name}</b>
      </h2>
      <div className="flex items-center gap-2 text-gray-600">
        <IconEdit className="w-4 h-4 hover:text-gray-700" />
        <IconTrash
          className="w-4 h-4 hover:text-gray-700"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(lesson.id);
          }}
        />
      </div>
    </div>
  );
};

export default ModuleLesson;
