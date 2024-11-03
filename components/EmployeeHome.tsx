import React from "react";
import Course from "@/components/Course";
import TopViewedCourse from "./TopViewedCourse";

const EmployeeHome = () => {
  return (
    <div className="open-sans">
      <h1 className="text-xl max-md:text-lg font-bold mb-4">Ongoing Courses</h1>
      <div className="grid grid-cols-4 gap-6">
        <Course enrolled={true} />
        <Course enrolled={true} />
        <Course enrolled={true} />
        <Course enrolled={true} />
      </div>
      <h1 className="text-xl max-md:text-lg font-bold mb-4 mt-6">Pending Courses</h1>
      <div className="grid grid-cols-4 gap-6">
        <Course enrolled={true} />
        <Course enrolled={true} />
        <Course enrolled={true} />
        <Course enrolled={true} />
      </div>
    </div>
  );
};

export default EmployeeHome;
