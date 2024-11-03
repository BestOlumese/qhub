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
      <Label htmlFor="intro-video">Course Intro Video (Optional)</Label>
      <VideoUpload file={videoFile} setFile={setVideoFile} />
      <Label htmlFor="image-upload">Display Image (Optional)</Label>
      <ImageUpload file={imageFile} setFile={setImageFile} />
    </div>
  );
};

export default IntroVideoUpload;
