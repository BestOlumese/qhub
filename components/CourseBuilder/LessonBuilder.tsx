"use client";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { IconLink, IconX } from "@tabler/icons-react";
import ImageUpload from "./ImageUpload";
import VideoUpload from "./VideoUpload";
import { Lesson, Module } from "@/lib/types";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
const LessonBuilder = ({
  module,
  setModules,
  propLesson,
}: {
  module: Module;
  setModules: React.Dispatch<React.SetStateAction<Module[]>>;
  propLesson?: Lesson;
}) => {
  const [featuredImage, setFeaturedImage] = useState<string | null>(
    propLesson?.featuredImage || ""
  );
  const [lessonVideo, setLessonVideo] = useState<string | null>(
    propLesson?.video || ""
  );
  const [attachments, setAttachments] = useState<File[]>(
    propLesson?.exerciseFiles || []
  );
  const [lesson, setLesson] = useState<Lesson>({
    id: propLesson?.id || uuidv4(),
    name: propLesson?.name || "",
    content: propLesson?.content || "",
    featuredImage: propLesson?.featuredImage || "",
    video: propLesson?.video || "",
    exerciseFiles: propLesson?.exerciseFiles || [],
  });
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setAttachments((prev) => [...prev, ...Array.from(files)]);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLesson((prev) => ({ ...prev, [id]: value }));
  };
  const handleQuillChange = (value: string) => {
    setLesson((prev) => ({ ...prev, content: value }));
  };

  const removeAttachment = (fileToRemove: File) => {
    setAttachments((prev) =>
      prev.filter((file) => file.name !== fileToRemove.name)
    );
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newLesson = {
      ...lesson,
      featuredImage: featuredImage!,
      video: lessonVideo!,
      exerciseFiles: attachments,
    };
    if (propLesson) {
      setModules((prev) =>
        prev.map((prevModule) =>
          prevModule.id === module.id
            ? {
                ...module,
                lessons: prevModule.lessons?.map((l) =>
                  l.id === lesson.id ? newLesson : l
                ),
              }
            : module
        )
      );
    } else {
      setModules((prev) =>
        prev.map((prevModule) =>
          prevModule.id === module.id
            ? { ...module, lessons: [...module.lessons!, newLesson] }
            : module
        )
      );
    }
    console.log(newLesson, "newLesson");
  };
  console.log("lesson", lesson);

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="name">Lesson Name</Label>
        <Input
          id="name"
          className="col-span-3"
          onChange={handleChange}
          value={lesson.name}
        />
      </div>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="lessonContent">Lesson Content</Label>
        <ReactQuill
          theme="snow"
          value={lesson.content}
          onChange={handleQuillChange}
          className="rounded-md shadow-sm"
          style={{
            resize: "vertical",
            minHeight: "150px",
            height: "150px",
            maxHeight: "200px",
            overflowY: "auto",
          }}
        />
      </div>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="video">Lesson Video</Label>
        <VideoUpload
          className="h-[180px]"
          file={lessonVideo}
          setFile={setLessonVideo}
        />
      </div>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="featuredImage">Featured Image</Label>
        <ImageUpload
          className="h-[180px]"
          file={featuredImage}
          setFile={setFeaturedImage}
        />
      </div>

      <div className="grid gap-2 mt-4 w-[50%]">
        <Label htmlFor="lessonResources">Extra Lesson Resources</Label>
        <Button variant={"outline"} type="button">
          <label
            htmlFor="attachments"
            className="cursor-pointer flex items-center gap-2"
          >
            <IconLink className="w-5 h-5" />
            Upload Attachments
          </label>
          <input
            id="attachments"
            type="file"
            accept="*"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
        </Button>
      </div>

      {attachments.length > 0 && (
        <div className="mt-4 space-y-2">
          <Label>Uploaded Files</Label>
          <div className="flex flex-wrap gap-4">
            {attachments.map((file, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-2 bg-gray-100 rounded-md shadow-md"
              >
                <div>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={() => removeAttachment(file)}
                  className="text-red-500 hover:text-red-700"
                >
                  <IconX className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <DialogFooter className="flex !justify-between w-full mt-4 flex-row">
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button className="bg-primary hover:bg-primary/90" type="submit">
            Update Module
          </Button>
        </DialogClose>
      </DialogFooter>
    </form>
  );
};

export default LessonBuilder;
