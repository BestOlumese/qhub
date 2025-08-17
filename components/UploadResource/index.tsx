"use client";
import React, { useState } from "react";
import { SheetContent, SheetTrigger, Sheet } from "@/components/ui/sheet";
import { IconFilePlus } from "@tabler/icons-react";
import { Button } from "../ui/button";
import Step1UploadFile from "./Step1UploadFile";
import Step2ResourceInfo from "./Step2ResourceInfo";

export interface ResourceData {
  name: string;
  description: string;
  author: string;
  fileType: string;
  fileUrl: string;
  organizationId: string;
  duration?: number; // in minutes
}

const UploadResource = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const handleNextStep = (file: File, url: string) => {
    setUploadedFile(file);
    setFileUrl(url);
    setCurrentStep(2);
  };

  const handlePreviousStep = () => setCurrentStep(1);

  const handleResourceSaved = () => {
    // Reset form and close sheet
    setCurrentStep(1);
    setUploadedFile(null);
    setFileUrl("");
    setIsOpen(false);
    // Optionally trigger a refetch of resources list
    window.location.reload(); // Or use a more sophisticated state management approach
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="bg-primary w-fit max-lg:mt-2 text-white hover:bg-primary/90">
          <IconFilePlus className="inline mr-2 w-5 h-5" />
          Upload Resource
        </Button>
      </SheetTrigger>
      <SheetContent className="px-0 py-4">
        {currentStep === 1 && <Step1UploadFile onNext={handleNextStep} />}
        {currentStep === 2 && (
          <Step2ResourceInfo
            onBack={handlePreviousStep}
            uploadedFile={uploadedFile}
            fileUrl={fileUrl}
            onResourceSaved={handleResourceSaved}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};

export default UploadResource;