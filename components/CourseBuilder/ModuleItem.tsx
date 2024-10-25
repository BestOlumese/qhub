import React, { useState } from "react";
import { Module } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LessonBuilder from "./LessonBuilder";
import ModuleItemCategories from "./ModuleItemCategories";
import { Lesson } from "@/lib/types";
import ModuleLesson from "./ModuleLesson";
const ModuleItem = ({
  module,
  setModules,
  moduleIndex,
  openModule,
  setActiveModule,
}: {
  module: Module;
  moduleIndex: number;
  setModules: React.Dispatch<React.SetStateAction<Module[]>>;
  openModule: () => void;
  setActiveModule: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState<Lesson>();
  const handleLessonClick = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setIsDialogOpen(true);
  };
  const handleDeleteModule = (id: string) => {
    setModules((prevModules) => prevModules.filter((m) => m.id !== id));
  };
  const handleDeleteLesson = (id: string) => {
    setModules((prevModules) =>
      prevModules.map((m) => {
        if (m.id === module.id) {
          return {
            ...m,
            moduleItems: m.moduleItems.filter((l) => l.id !== id),
          };
        }
        return m;
      })
    );
  };

  return (
    <>
      <AccordionItem
        value={`module-${moduleIndex}`}
        className="bg-gray-200 rounded-md p-4 py-0"
      >
        <AccordionTrigger className="hover:no-underline">
          <div className="flex justify-between w-full">
            <p className="text-lg flex gap-2 items-center capitalize">
              <span className="text-base text-gray-700">
                Module {moduleIndex + 1}:
              </span>
              {module.name}
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <IconEdit
                className="w-4 h-4 hover:text-gray-600"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveModule(moduleIndex);
                  openModule();
                }}
              />
              <IconTrash
                className="w-4 h-4 hover:text-gray-600"
                onClick={() => handleDeleteModule(module.id)}
              />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {module.moduleItems.length > 0 && (
            <div className="my-2 flex flex-col gap-2">
              {module.moduleItems.map((lesson, index) => (
                <ModuleLesson
                  key={index}
                  handleClick={handleLessonClick}
                  lessonIndex={index}
                  lesson={lesson}
                  onDelete={handleDeleteLesson}
                />
              ))}
            </div>
          )}
          <ModuleItemCategories
            openDialog={setIsDialogOpen}
            setSelectedItem={setSelectedItem}
            setActiveLesson={setActiveLesson}
          />
        </AccordionContent>
      </AccordionItem>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className="max-h-[90vh] flex flex-col overflow-hidden"
          aria-describedby={undefined}
        >
          <DialogHeader>
            <DialogTitle className="capitalize">
              {selectedItem ? selectedItem : "Item"}
            </DialogTitle>
          </DialogHeader>
          {selectedItem === "lesson" && (
            <LessonBuilder
              setModules={setModules}
              module={module}
              propLesson={activeLesson}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModuleItem;
