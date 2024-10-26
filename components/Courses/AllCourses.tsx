import React from "react";
import Course from "../ui/Course";

const AllCourses = ({ showEnrolled }: { showEnrolled: boolean }) => {
  return (
    <div className=" flex flex-col max-lg:items-center overflow-y-auto overflow-hidden scrollbar">
      <div className="flex flex-col  py-8 px-4 md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        <Course enrolled={showEnrolled} />
        <Course enrolled={showEnrolled} />
        <Course enrolled={showEnrolled} />
        <Course enrolled={showEnrolled} />
        <Course enrolled={showEnrolled} />
        <Course enrolled={showEnrolled} />
      </div>
    </div>
  );
};

export default AllCourses;
