"use client";
import React, { useState } from "react";
import AllCourses from "@/components/Courses/AllCourses";
import Menu from "@/components/Courses/Menu";

const EmployeeCoursesPage = () => {
  const [showEnrolled, setShowEnrolled] = useState(false);
  return (
    <div className="p-6 h-full">
      <Menu showEnrolled={showEnrolled} setShowEnrolled={setShowEnrolled} />
      <AllCourses showEnrolled={showEnrolled} />
    </div>
  );
};

export default EmployeeCoursesPage;
