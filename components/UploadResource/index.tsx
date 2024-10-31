"use client";
import React, { useState } from "react";
import { SheetContent, SheetTrigger, Sheet } from "@/components/ui/sheet";
import { IconFilePlus } from "@tabler/icons-react";
import { Button } from "../ui/button";
import Step1UploadFile from "./Step1UploadFile";
import Step2ResourceInfo from "./Step2ResourceInfo";
const UploadResource = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePreviousStep = () => setCurrentStep((prev) => prev - 1);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-primary w-fit max-lg:mt-2 text-white hover:bg-primary/90">
          <IconFilePlus className="inline mr-2 w-5 h-5" />
          Upload Resource
        </Button>
      </SheetTrigger>
      <SheetContent className="px-0 py-4">
        {currentStep === 1 && <Step1UploadFile onNext={handleNextStep} />}
        {currentStep === 2 && <Step2ResourceInfo onBack={handlePreviousStep} />}
      </SheetContent>
    </Sheet>
  );
};

export default UploadResource;
