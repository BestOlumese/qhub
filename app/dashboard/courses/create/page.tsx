import CourseBuilder from "@/components/CourseBuilder";
import React from "react";

const Page = () => {
  return (
    <div className="p-6 h-full">
      <h2 className="font-semibold">Course Creation</h2>
      <CourseBuilder />
    </div>
  );
};

export default Page;
