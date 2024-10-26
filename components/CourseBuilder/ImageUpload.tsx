"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import fire from "@/assets/icons/fire.gif";
import { cn } from "@/lib/utils";
const ImageUpload = ({
  file,
  setFile,
  className,
}: {
  file: string | null;
  className?: string;
  setFile: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const [dragging, setDragging] = useState(false);
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (file && file.type.startsWith("image")) {
      setFile(URL.createObjectURL(file));
    }
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image")) {
      setFile(URL.createObjectURL(file));
    }
  };
  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "w-full   rounded-md border-2 border-black border-dotted h-[300px] flex items-center justify-center",
        dragging ? "border-blue-500 bg-blue-50" : "border-black",
        className
      )}
    >
      {!file ? (
        <>
          {!dragging ? (
            <div className="flex items-center justify-center w-full h-full flex-col">
              <p className="text-sm">Drag & drop your image here</p>
              <p className="mt-1 text-xs text-gray-500">
                File format: <b>.jpg, .png</b>
              </p>
              <p className="my-2 text-xs ">Or</p>
              <Button className="bg-primary hover:bg-primary/90" type="button">
                <label htmlFor="image-upload" className="cursor-pointer">
                  Browse Image
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUpload}
                />
              </Button>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center">
              <img src={fire.src} alt="Fire" width={100} height={100} />
              <h1 className="mt-2 text-primary text-lg font-medium">
                Drop it like it&apos;s hot!
              </h1>
            </div>
          )}
        </>
      ) : (
        <img
          src={file}
          alt="Display Image"
          className="w-full h-full object-cover rounded-md"
        />
      )}
    </div>
  );
};

export default ImageUpload;
