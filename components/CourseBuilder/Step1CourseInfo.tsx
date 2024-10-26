import React from "react";
import CourseInfoForm from "./CourseInfoForm";
import { Button } from "../ui/button";
const Step1CourseInfo = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="h-full">
      <div className="border-b border-b-gray-300 p-6">
        <h1 className="text-lg font-semibold">Course Information</h1>
        <p className="text-sm text-gray-600">
          Add information about the course
        </p>
      </div>
      <div className="p-6">
        <CourseInfoForm />
        <div className="flex justify-end mt-4 ">
          <Button className="bg-primary hover:bg-primary/90" onClick={onNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step1CourseInfo;
