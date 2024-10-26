"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import ImageUpload from "./ImageUpload";
import VideoUpload from "./VideoUpload";
const IntroVideoUpload = () => {
  const [videoFile, setVideoFile] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<string | null>(null);

  return (
    <div className="grid gap-6 mt-4">
      <Label htmlFor="intro-video">Course Intro Video</Label>

      <VideoUpload file={videoFile} setFile={setVideoFile} />

      {videoFile && (
        <>
          <Label htmlFor="image-upload">Upload a Display Image</Label>
          <ImageUpload file={imageFile} setFile={setImageFile} />
        </>
      )}
    </div>
  );
};

export default IntroVideoUpload;
