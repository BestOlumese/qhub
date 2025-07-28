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
  initialLesson?: Lesson;
  onSave: (lesson: Lesson) => void;
}

const LessonBuilder = ({ initialLesson, onSave }: LessonBuilderProps) => {
  // State for file uploads
  const [featuredImage, setFeaturedImage] = useState<string | null>(
    initialLesson?.featuredImage || ""
  );
  const [lessonVideo, setLessonVideo] = useState<string | null>(
    initialLesson?.video || ""
  );
  const [attachmentFiles, setAttachmentFiles] = useState<File[]>([]);
  const [attachmentUrls, setAttachmentUrls] = useState<string[]>(
    initialLesson?.exerciseFiles || []
  );
  
  // State for lesson data
  const [lesson, setLesson] = useState<Lesson>({
    id: initialLesson?.id || uuidv4(),
    name: initialLesson?.name || "",
    content: initialLesson?.content || "",
    featuredImage: initialLesson?.featuredImage || "",
    video: initialLesson?.video || "",
    exerciseFiles: initialLesson?.exerciseFiles || [],
  });
  
  // Upload hooks
  const { startUpload: startImageUpload, isUploading: isImageUploading } = 
    useUploadThing("logoUploader");
  const { startUpload: startVideoUpload, isUploading: isVideoUploading } = 
    useUploadThing("videoUploader");
  const { startUpload: startFileUpload, isUploading: isFileUploading } = 
    useUploadThing("fileUploader");
  
  const [isSaving, setIsSaving] = useState(false);
  
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setAttachmentFiles(prev => [...prev, ...Array.from(files)]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLesson(prev => ({ ...prev, [id]: value }));
  };

  const handleQuillChange = (value: string) => {
    setLesson(prev => ({ ...prev, content: value }));
  };

  const removeAttachment = (index: number, isNew: boolean) => {
    if (isNew) {
      setAttachmentFiles(prev => prev.filter((_, i) => i !== index));
    } else {
      setAttachmentUrls(prev => prev.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      // Upload featured image if changed
      let featuredImageUrl = featuredImage;
      if (featuredImage && featuredImage.startsWith("blob:")) {
        const imageFile = await fetch(featuredImage).then(res => res.blob());
        const uploaded = await startImageUpload([new File([imageFile], "featured-image.jpg")]);
        if (uploaded?.[0]?.url) {
          featuredImageUrl = uploaded[0].url;
        }
      }

      // Upload video if changed
      let videoUrl = lessonVideo;
      if (lessonVideo && lessonVideo.startsWith("blob:")) {
        const videoFile = await fetch(lessonVideo).then(res => res.blob());
        const uploaded = await startVideoUpload([new File([videoFile], "lesson-video.mp4")]);
        if (uploaded?.[0]?.url) {
          videoUrl = uploaded[0].url;
        }
      }

      // Upload attachments
      let exerciseFileUrls: string[] = [...attachmentUrls];
      if (attachmentFiles.length > 0) {
        const uploaded = await startFileUpload(attachmentFiles);
        if (uploaded) {
          exerciseFileUrls = [...exerciseFileUrls, ...uploaded.map(file => file.url)];
        }
      }

      // Prepare lesson data
      const lessonData: Lesson = {
        ...lesson,
        featuredImage: featuredImageUrl || "",
        video: videoUrl || "",
        exerciseFiles: exerciseFileUrls,
      };

      // Call save callback
      onSave(lessonData);
    } catch (error) {
      console.error("Error saving lesson:", error);
    } finally {
      setIsSaving(false);
    }
  };

  // Update lesson state when files change
  useEffect(() => {
    setLesson(prev => ({
      ...prev,
      featuredImage: featuredImage || "",
      video: lessonVideo || "",
    }));
  }, [featuredImage, lessonVideo]);

  return (
    <form onSubmit={handleSubmit}>
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
      <div className="grid gap-2 mt-4">
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
          required
        />
      </div>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="video">Lesson Video</Label>
        <VideoUpload
          className="h-[180px]"
          file={lessonVideo}
          setFile={setLessonVideo}
          disabled={isSaving}
        />
      </div>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="featuredImage">Featured Image</Label>
        <ImageUpload
          className="h-[180px]"
          file={featuredImage}
          setFile={setFeaturedImage}
          disabled={isSaving}
        />
      </div>

      <div className="grid gap-2 mt-4 w-[50%]">
        <Label htmlFor="lessonResources">Extra Lesson Resources</Label>
        <Button 
          variant={"outline"} 
          type="button"
          disabled={isSaving}
        >
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
            disabled={isSaving}
          />
        </Button>
      </div>

      {(attachmentUrls.length > 0 || attachmentFiles.length > 0) && (
        <div className="mt-4 space-y-2">
          <Label>Uploaded Files</Label>
          <div className="flex flex-wrap gap-4">
            {/* Existing attachments (URLs) */}
            {attachmentUrls.map((url, index) => {
              const fileName = url.substring(url.lastIndexOf('/') + 1);
              return (
                <div
                  key={`existing-${index}`}
                  className="flex items-center space-x-2 p-2 bg-gray-100 rounded-md shadow-md"
                >
                  <div>
                    <p className="text-sm font-medium">{fileName}</p>
                    <p className="text-xs text-gray-500">Uploaded file</p>
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
                className="flex items-center space-x-2 p-2 bg-gray-100 rounded-md shadow-md"
              >
                <div>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
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
      
      <div className="flex !justify-between w-full mt-4 flex-row">
        <Button 
          variant="outline" 
          type="button"
          onClick={() => window.history.back()}
        >
          Cancel
        </Button>
        <Button
          className="bg-primary hover:bg-primary/90"
          type="submit"
          disabled={isSaving}
        >
          {isSaving ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : null}
          {initialLesson ? "Update Lesson" : "Create Lesson"}
        </Button>
      </div>
    </form>
  );
};

export default LessonBuilder;