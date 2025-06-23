import React from "react";
import CourseInfoForm from "./CourseInfoForm";
import { Button } from "../ui/button";

interface Step1CourseInfoProps {
  onNext: () => void;
  courseInput: any;
  setCourseInput: React.Dispatch<React.SetStateAction<any>>;
}

const Step1CourseInfo = ({ 
  onNext, 
  courseInput, 
  setCourseInput 
}: Step1CourseInfoProps) => {
  return (
    <div className="h-full">
      <div className="border-b border-b-gray-300 p-6 max-md:p-4">
        <h1 className="text-lg font-semibold">Course Information</h1>
        <p className="text-sm text-gray-600">
          Add information about the course
        </p>
      </div>
      <div className="p-6 max-md:p-4">
        <CourseInfoForm 
          courseInput={courseInput} 
          setCourseInput={setCourseInput} 
        />
        <div className="flex justify-end mt-4 ">
          <Button 
            className="bg-primary hover:bg-primary/90" 
            onClick={onNext}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step1CourseInfo;