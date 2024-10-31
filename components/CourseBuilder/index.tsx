"use client";
import React, { useState } from "react";
import Step1CourseInfo from "./Step1CourseInfo";
import Step2ModuleBuilder from "./Step2ModuleBuilder";
import { IconCircleCheckFilled } from "@tabler/icons-react";

const steps = [
  {
    label: "Course Information",
  },
  {
    label: "Module Creation",
  },
];
const CourseBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePrevStep = () => setCurrentStep((prev) => prev - 1);
  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };
  return (
    <>
      <div className="flex gap-4 items-center my-2">
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => handleStepClick(index + 1)}
            className={`flex items-center gap-2 text-sm max-md:text-xs cursor-pointer ${
              index + 1 < currentStep ? "text-primary" : "text-gray-500"
            }`}
          >
            {index + 1 < currentStep ? (
              <IconCircleCheckFilled className="w-5 h-5 text-primary" />
            ) : (
              <span
                className={`w-5 h-5 flex items-center justify-center rounded-full ${
                  index + 1 === currentStep
                    ? "bg-primary text-white"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </span>
            )}
            <span
              className={`${
                index + 1 <= currentStep ? "font-semibold" : "font-normal"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full mt-4 min-h-[calc(100vh-200px)] bg-white rounded-md  border border-gray-300">
        {currentStep === 1 && <Step1CourseInfo onNext={handleNextStep} />}
        {currentStep === 2 && (
          <Step2ModuleBuilder
            onNext={handleNextStep}
            onPrevious={handlePrevStep}
          />
        )}
      </div>
    </>
  );
};

export default CourseBuilder;
