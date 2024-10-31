"use client";
import React, { useState } from "react";
import { IconCirclePlus, IconInfoCircle } from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Module } from "@/lib/types";
import ModuleItem from "./ModuleItem";
import { Accordion } from "@/components/ui/accordion";
const ModuleBuilder = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [newModule, setNewModule] = useState<Module>({
    id: uuidv4(),
    name:
      activeModule && modules[activeModule] ? modules[activeModule]?.name : "",
    summary:
      activeModule && modules[activeModule]
        ? modules[activeModule]?.summary
        : "",
    lessons:
      activeModule && modules[activeModule]
        ? modules[activeModule]?.lessons
        : [],
    quizzes:
      activeModule && modules[activeModule]
        ? modules[activeModule]?.quizzes
        : [],
  });

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleUpdateModule = () => {
    if (activeModule !== null) {
      console.log("activeModule dey");
      setModules((prev) =>
        prev.map((prevModule, index) =>
          index === activeModule ? newModule : prevModule
        )
      );
    } else {
      console.log("no active module");
      setModules([...modules, newModule]);
    }
  };
  console.log(activeModule, "Active module", newModule);
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setNewModule((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleAddNewModule = () => {
    setActiveModule(null);
    setNewModule({
      id: uuidv4(),
      name: "",
      summary: "",
      lessons: [],
      quizzes: [],
    });
  };
  return (
    <div className="p-6 h-full">
      {modules.length === 0 ? (
        <p>No module created yet</p>
      ) : (
        <Accordion type="single" collapsible className="grid gap-4">
          {modules.map((module, index) => {
            return (
              <ModuleItem
                key={index}
                module={module}
                setModules={setModules}
                moduleIndex={index}
                openModule={handleOpen}
                setActiveModule={setActiveModule}
              />
            );
          })}
        </Accordion>
      )}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button
            className="bg-primary mt-2 text-white text-sm px-4 p-2 rounded-md flex items-center "
            onClick={handleAddNewModule}
          >
            <IconCirclePlus className="inline mr-2 w-5 h-5" />
            Add New Module
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl" aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>Module</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <Label htmlFor="name">Module Name</Label>
            <Input
              id="name"
              className="col-span-3"
              onChange={handleChange}
              value={newModule.name}
            />
          </div>
          <div className="grid gap-4">
            <Label htmlFor="summary">Module Summary</Label>
            <Textarea
              placeholder="Type summary here."
              id="summary"
              rows={4}
              onChange={handleChange}
              value={newModule.summary}
            />
          </div>
          <div className="flex justify-between">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                className="bg-primary hover:bg-primary/90"
                onClick={handleUpdateModule}
              >
                Update Module
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModuleBuilder;
