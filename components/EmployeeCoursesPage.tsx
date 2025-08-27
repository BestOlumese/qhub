"use client";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import AllCourses from "@/components/Courses/AllCourses";
import Menu from "@/components/Courses/Menu";
import { GET_ORGANIZATION_COURSES } from "@/lib/graphql";
import Cookies from "js-cookie";

const EmployeeCoursesPage = () => {
  const [showEnrolled, setShowEnrolled] = useState(false);
  const organizationId = Cookies.get("organizationId") || ""; 
  
  const { data, loading, error } = useQuery(GET_ORGANIZATION_COURSES, {
    variables: { organizationId },
    errorPolicy: 'all'
  });

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-lg">Loading courses...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-red-500">Error loading courses: {error.message}</div>
      </div>
    );
  }

  return (
    <div className=" h-full">
      <Menu showEnrolled={showEnrolled} setShowEnrolled={setShowEnrolled} />
      <AllCourses 
        showEnrolled={showEnrolled} 
        coursesData={data?.getOrganizationCourses}
      />
    </div>
  );
};

export default EmployeeCoursesPage;