import React from "react";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";
import { Lesson } from "@/lib/types";
const MODULEITEMCATGORIES = ["lesson", "quiz"];
const ModuleItemCategories = ({
  openDialog,
  setSelectedItem,
  setActiveLesson,
}: {
  openDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedItem: React.Dispatch<React.SetStateAction<string | null>>;
  setActiveLesson: React.Dispatch<React.SetStateAction<Lesson | undefined>>;
}) => {
  const handleClick = (item: string) => {
    setSelectedItem(item);
    openDialog(true);
    setActiveLesson(undefined);
  };
  return (
    <div className="flex gap-2 items-center">
      {MODULEITEMCATGORIES.map((moduleItem, index) => {
        let borderColor = "border-primary";
        let hoverColor = "hover:bg-primary/10";
        let iconColor = "text-primary";
        if (moduleItem === "lesson") {
          borderColor = "border-primary";
          iconColor = "text-primary";
          hoverColor = "hover:bg-primary/10";
        } else if (moduleItem === "quiz") {
          borderColor = "border-green-500";
          iconColor = "text-green-500";
          hoverColor = "hover:bg-green-500/10";
        } else if (moduleItem === "task") {
          borderColor = "border-red-500";
          iconColor = "text-red-500";
          hoverColor = "hover:bg-red-500/10";
        }

        return (
          <button
            key={index}
            className={`flex items-center gap-2 text-sm border capitalize ${borderColor} p-2 rounded-md ${hoverColor}`}
            onClick={() => handleClick(moduleItem)}
          >
            <IconSquareRoundedPlusFilled className={`w-5 h-5 ${iconColor}`} />
            {moduleItem}
          </button>
        );
      })}
    </div>
  );
};

export default ModuleItemCategories;
