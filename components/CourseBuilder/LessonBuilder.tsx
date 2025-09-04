"use client";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { IconLink, IconX } from "@tabler/icons-react";
import ImageUpload from "./ImageUpload";
import VideoUpload from "./VideoUpload";
import { Lesson } from "@/lib/types";
import { useUploadThing } from "@/utils/uploadthing";
import { Loader2 } from "lucide-react";

interface LessonBuilderProps {
  initialLesson?: Lesson | null;
  onSave: (lesson: Lesson) => void;
}

const LessonBuilder = ({ initialLesson, onSave }: LessonBuilderProps) => {
  // State for file uploads
  const [featuredImage, setFeaturedImage] = useState<string>("");
  const [lessonVideo, setLessonVideo] = useState<string>("");
  const [attachmentFiles, setAttachmentFiles] = useState<File[]>([]);
  const [attachmentUrls, setAttachmentUrls] = useState<string[]>([]);

  // State for lesson data
  const [lesson, setLesson] = useState<Lesson>({
    id: uuidv4(),
    name: "",
    content: "",
    featuredImage: "",
    video: "",
    exerciseFiles: [],
    duration: 0,
    index: 0,
  });

  // Upload hooks
  const { startUpload: startImageUpload, isUploading: isImageUploading } =
    useUploadThing("logoUploader");
  const { startUpload: startVideoUpload, isUploading: isVideoUploading } =
    useUploadThing("videoUploader");
  const { startUpload: startFileUpload, isUploading: isFileUploading } =
    useUploadThing("fileUploader");

  const [isSaving, setIsSaving] = useState(false);

  // Initialize state when initialLesson changes
  useEffect(() => {
    if (initialLesson) {
      setLesson({
        id: initialLesson.id,
        _id: initialLesson._id,
        name: initialLesson.name || "",
        content: initialLesson.content || "",
        featuredImage: initialLesson.featuredImage || "",
        video: initialLesson.video || "",
        exerciseFiles: initialLesson.exerciseFiles || [],
        duration: initialLesson.duration || 0,
        index: initialLesson.index || 0,
        moduleId: initialLesson.moduleId,
      });
      
      setFeaturedImage(initialLesson.featuredImage || "");
      setLessonVideo(initialLesson.video || "");
      
      // Handle exerciseFiles safely
      try {
        if (initialLesson.exerciseFiles && Array.isArray(initialLesson.exerciseFiles)) {
          const urls = initialLesson.exerciseFiles
            .filter((f: any) => f && typeof f === "string" && f.trim() !== "")
            .map((f: string) => f.trim());
          setAttachmentUrls(urls);
        } else {
          setAttachmentUrls([]);
        }
      } catch (error) {
        console.error("Error processing exerciseFiles:", error);
        setAttachmentUrls([]);
      }
      
      setAttachmentFiles([]);
    } else {
      // Reset for new lesson
      const newId = uuidv4();
      setLesson({
        id: newId,
        name: "",
        content: "",
        featuredImage: "",
        video: "",
        exerciseFiles: [],
        duration: 0,
        index: 0,
      });
      setFeaturedImage("");
      setLessonVideo("");
      setAttachmentUrls([]);
      setAttachmentFiles([]);
    }
  }, [initialLesson]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    
    if (!files || files.length === 0) {
      console.log("No files selected");
      return;
    }
    
    console.log("Files selected:", Array.from(files));
    const fileArray = Array.from(files);
    
    // Validate and add files
    const validFiles = fileArray.filter(file => {
      if (file.size > 50 * 1024 * 1024) { // 50MB limit
        alert(`File ${file.name} is too large. Maximum size is 50MB.`);
        return false;
      }
      return true;
    });

    if (validFiles.length > 0) {
      setAttachmentFiles(prev => {
        const newFiles = [...prev, ...validFiles];
        console.log("Updated attachment files:", newFiles);
        return newFiles;
      });
    }
    
    // Reset input
    event.target.value = '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLesson((prev) => ({ ...prev, [id]: value }));
  };

  const handleQuillChange = (value: string) => {
    setLesson((prev) => ({ ...prev, content: value }));
  };

  const removeAttachment = (index: number, isNew: boolean) => {
    if (isNew) {
      setAttachmentFiles((prev) => prev.filter((_, i) => i !== index));
    } else {
      setAttachmentUrls((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate required fields
    if (!lesson.name.trim()) {
      alert("Please enter a lesson name");
      return;
    }
    
    if (!lesson.content.trim()) {
      alert("Please enter lesson content");
      return;
    }
    
    setIsSaving(true);

    try {
      let featuredImageUrl = featuredImage;
      let videoUrl = lessonVideo;
      let allExerciseFileUrls: string[] = [...attachmentUrls];

      // Upload featured image if it's a blob URL
      if (featuredImage && featuredImage.startsWith("blob:")) {
        try {
          const imageFile = await fetch(featuredImage).then((res) => res.blob());
          const uploaded = await startImageUpload([
            new File([imageFile], "featured-image.jpg"),
          ]);
          if (uploaded?.[0]?.url) {
            featuredImageUrl = uploaded[0].url;
          }
        } catch (error) {
          console.error("Image upload failed:", error);
        }
      }

      // Upload video if it's a blob URL
      if (lessonVideo && lessonVideo.startsWith("blob:")) {
        try {
          const videoFile = await fetch(lessonVideo).then((res) => res.blob());
          const uploaded = await startVideoUpload([
            new File([videoFile], "lesson-video.mp4"),
          ]);
          if (uploaded?.[0]?.url) {
            videoUrl = uploaded[0].url;
          }
        } catch (error) {
          console.error("Video upload failed:", error);
        }
      }

      // Upload new attachment files
      if (attachmentFiles.length > 0) {
        try {
          const uploaded = await startFileUpload(attachmentFiles);
          if (uploaded && uploaded.length > 0) {
            const newFileUrls = uploaded
              .map((file) => file.url)
              .filter((url): url is string => Boolean(url));
            allExerciseFileUrls = [...allExerciseFileUrls, ...newFileUrls];
          }
        } catch (uploadError) {
          console.error("File upload failed:", uploadError);
          alert("Failed to upload attachment files. Please try again.");
          setIsSaving(false);
          return;
        }
      }

      // Create final lesson data
      const lessonData: Lesson = {
        ...lesson,
        featuredImage: featuredImageUrl || "",
        video: videoUrl || "",
        exerciseFiles: allExerciseFileUrls,
      };

      // Save the lesson
      await onSave(lessonData);
      
      // Clear attachment files after successful save
      setAttachmentFiles([]);
      
    } catch (error) {
      console.error("Error saving lesson:", error);
      alert("Failed to save lesson. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  // Update lesson state when media files change
  useEffect(() => {
    setLesson((prev) => ({
      ...prev,
      featuredImage: featuredImage || "",
      video: lessonVideo || "",
    }));
  }, [featuredImage, lessonVideo]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Lesson Name *</Label>
        <Input
          id="name"
          className="col-span-3"
          onChange={handleChange}
          value={lesson.name}
          required
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lessonContent">Lesson Content *</Label>
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
      
      <div className="grid gap-2">
        <Label htmlFor="video">Lesson Video</Label>
        <VideoUpload
          className="h-[180px]"
          file={lessonVideo}
          setFile={setLessonVideo}
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="featuredImage">Featured Image</Label>
        <ImageUpload
          className="h-[180px]"
          file={featuredImage}
          setFile={setFeaturedImage}
        />
      </div>

      <div className="grid gap-2 w-[50%]">
        <Label htmlFor="lessonResources">Extra Lesson Resources</Label>
        <div className="relative">
          <Button variant="outline" type="button" disabled={isSaving} asChild>
            <label
              htmlFor="attachments"
              className="cursor-pointer flex items-center gap-2 w-full justify-center"
            >
              <IconLink className="w-5 h-5" />
              Upload Attachments
            </label>
          </Button>
          <input
            id="attachments"
            type="file"
            accept="*/*"
            multiple
            onChange={handleFileUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isSaving}
          />
        </div>
        {attachmentFiles.length > 0 && (
          <p className="text-xs text-gray-500">
            {attachmentFiles.length} new file(s) selected
          </p>
        )}
      </div>

      {(attachmentUrls.length > 0 || attachmentFiles.length > 0) && (
        <div className="space-y-2">
          <Label>Attached Files</Label>
          <div className="flex flex-wrap gap-4">
            {/* Existing attachments (URLs) */}
            {attachmentUrls.map((url, index) => {
              const fileName = url.substring(url.lastIndexOf("/") + 1) || `File ${index + 1}`;
              return (
                <div
                  key={`existing-${index}`}
                  className="flex items-center space-x-2 p-2 bg-gray-100 rounded-md shadow-md"
                >
                  <div>
                    <p className="text-sm font-medium">{fileName}</p>
                    <p className="text-xs text-gray-500">Existing file</p>
                  </div>
                  <button
                    onClick={() => removeAttachment(index, false)}
                    className="text-red-500 hover:text-red-700"
                    type="button"
                    disabled={isSaving}
                  >
                    <IconX className="w-5 h-5" />
                  </button>
                </div>
              );
            })}

            {/* New attachments (Files) */}
            {attachmentFiles.map((file, index) => (
              <div
                key={`new-${index}`}
                className="flex items-center space-x-2 p-2 bg-blue-50 rounded-md shadow-md"
              >
                <div>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB - New file
                  </p>
                </div>
                <button
                  onClick={() => removeAttachment(index, true)}
                  className="text-red-500 hover:text-red-700"
                  type="button"
                  disabled={isSaving}
                >
                  <IconX className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between w-full flex-row">
        <Button
          variant="outline"
          type="button"
          onClick={() => window.history.back()}
          disabled={isSaving}
        >
          Cancel
        </Button>
        <Button
          className="bg-primary hover:bg-primary/90"
          type="submit"
          disabled={isSaving || !lesson.name.trim() || !lesson.content.trim()}
        >
          {isSaving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          {initialLesson ? "Update Lesson" : "Create Lesson"}
        </Button>
      </div>
    </form>
  );
};

export default LessonBuilder;