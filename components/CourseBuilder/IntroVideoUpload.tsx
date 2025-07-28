// components/IntroVideoUpload.tsx
"use client";
import React from "react";
import { Label } from "../ui/label";
import ImageUpload from "./ImageUpload";
import VideoUpload from "./VideoUpload";

const IntroVideoUpload = ({ courseInput, setCourseInput }: any) => {
  return (
    <div className="grid gap-6 mt-4">
      <Label htmlFor="intro-video">Course Intro Video (Optional)</Label>
      <VideoUpload
        file={courseInput.introVideoUrl}
        setFile={(url) =>
          setCourseInput((prev: any) => ({
            ...prev,
            introVideoUrl: url,
          }))
        }
      />

      <Label htmlFor="image-upload">Display Image (Optional)</Label>
      <ImageUpload
        file={courseInput.displayImageUrl}
        setFile={(url) =>
          setCourseInput((prev: any) => ({
            ...prev,
            displayImageUrl: url,
          }))
        }
      />
    </div>
  );
};

export default IntroVideoUpload;
