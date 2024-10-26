import React from "react";
import ModuleBuilder from "./ModuleBuilder";
import { Button } from "../ui/button";
const Step2ModuleBuilder = ({
  onNext,
  onPrevious,
}: {
  onNext: () => void;
  onPrevious: () => void;
}) => {
  return (
    <div className="min-h-[calc(100vh-200px)] relative">
      <div className="border-b border-b-gray-300 p-6">
        <h1 className="text-lg font-semibold">Module & Quiz Creation</h1>
        <p className="text-sm text-gray-600">
          Add modules, quizzes, or tasks to your course
        </p>
      </div>
      <ModuleBuilder />
      <div className="flex !justify-between w-full flex-row absolute bottom-0 left-0 right-0 p-6 ">
        <Button variant="outline" onClick={onPrevious}>
          Back
        </Button>
        <Button
          className="bg-primary hover:bg-primary/90"
          type="submit"
          onClick={onNext}
        >
          Review
        </Button>
      </div>
    </div>
  );
};

export default Step2ModuleBuilder;
