"use client";
import AllCourses from "./AllCourses";
import Menu from "./Menu";
import React, { useState } from "react";

const AllCoursesPage = () => {
  const [showEnrolled, setShowEnrolled] = useState(false);
  return (
    <div className="p-12 py-6 ">
      <Menu showEnrolled={showEnrolled} setShowEnrolled={setShowEnrolled} />
      <AllCourses showEnrolled={showEnrolled} />
    </div>
  );
};

export default AllCoursesPage;
