import React from "react";
import Course from "../Course";

const AllCourses = ({ showEnrolled }: { showEnrolled: boolean }) => {
  return (
    <div className=" flex flex-col mt-4 max-lg:items-center overflow-y-auto overflow-hidden scrollbar">
      <div className="flex flex-col  md:grid md:grid-cols-2 xl:grid-cols-4 gap-6 ">
        <Course enrolled={showEnrolled} />
        <Course enrolled={showEnrolled} />
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
