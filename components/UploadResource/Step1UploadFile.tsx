"use client";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React, { useState } from "react";
import { useUploadThing } from "@/utils/uploadthing";
import { Loader2 } from "lucide-react";

interface Step1Props {
  onNext: (file: File, url: string) => void;
}

const Step1UploadFile = ({ onNext }: Step1Props) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const { startUpload } = useUploadThing("fileUploader", {
    onClientUploadComplete: (res) => {
      if (res && res[0] && selectedFile) {
        onNext(selectedFile, res[0].url);
      }
      setIsUploading(false);
    },
    onUploadError: (error) => {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
      setIsUploading(false);
    },
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleNext = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    setIsUploading(true);
    try {
      await startUpload([selectedFile]);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Please try again.");
      setIsUploading(false);
    }
  };

  return (
    <>
      <SheetHeader>
        <SheetTitle className="px-6 border-b-2 pb-4">Upload Resource</SheetTitle>
        <SheetDescription className="px-6">
          Easily upload and share educational documents with your employees or
          organization.
        </SheetDescription>
      </SheetHeader>
      <div className="mt-4 px-6">
        <div className="flex flex-col gap-2 mt-6 max-w-sm">
          <Label htmlFor="picture">Upload File</Label>
          <Input
            id="picture"
            type="file"
            accept=".pdf,.docx,.txt,.pptx"
            onChange={handleFileSelect}
            disabled={isUploading}
          />
          <p className="text-xs text-gray-500">.pdf, .docx, .txt, .pptx</p>
          {selectedFile && (
            <p className="text-sm text-green-600">
              Selected: {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
            </p>
          )}
        </div>
        <div className="flex mt-4">
          <Button
            className="bg-primary"
            onClick={handleNext}
            disabled={!selectedFile || isUploading}
          >
            {isUploading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Uploading...
              </>
            ) : (
              "Next"
            )}
          </Button>
        </div>
      </div>
    </>
  );
};
export default Step1UploadFile;
