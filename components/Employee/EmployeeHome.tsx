import React from "react";
import Course from "@/components/ui/Course";
import TopViewedCourse from "../TopViewedCourse";

const EmployeeHome = () => {
  return (
    <div className="open-sans">
      <h1 className="text-xl max-md:text-lg font-bold mb-4">Ongoing Courses</h1>
      <Course enrolled={true} />
     
    </div>
  );
};

export default EmployeeHome;
