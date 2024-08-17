import React from "react";
import Course from "../ui/Course";
const AllCourses = ({ showEnrolled }: { showEnrolled: boolean }) => {
  return (
    <div className="py-8 grid grid-cols-3 gap-8 ">
      <Course enrolled={showEnrolled} />
      <Course enrolled={showEnrolled}/>
      <Course enrolled={showEnrolled}/>
      <Course enrolled={showEnrolled}/>
      <Course enrolled={showEnrolled}/>
      <Course enrolled={showEnrolled}/>
    </div>
  );
};

export default AllCourses;
