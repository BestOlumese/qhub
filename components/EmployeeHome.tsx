"use client";
import React from "react";
import Course from "@/components/Course";
import TopViewedCourse from "./TopViewedCourse";
import { GET_ORGANIZATION_COURSES } from "@/lib/graphql";
import Cookies from "js-cookie";
import { useQuery } from "@apollo/client";

interface CourseData {
  _id: string;
  title: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  duration: number;
  description: string;
  displayImageUrl: string;
  introVideoUrl: string;
}

interface EnrollmentData {
  _id: string;
  completed: boolean;
  course: CourseData;
  createdAt: string;
  progress: number;
  updatedAt: string;
}

interface OrganizationCoursesData {
  course: CourseData;
  enrollment: EnrollmentData | null;
}

const EmployeeHome = () => {
  const organizationId = Cookies.get("organizationId") || "";

  const { data, loading, error } = useQuery(GET_ORGANIZATION_COURSES, {
    variables: { organizationId },
    errorPolicy: "all",
  });

  if (loading) {
    return (
      <div className="open-sans">
        <div className="flex items-center justify-center h-40">
          <div className="text-lg">Loading courses...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="open-sans">
        <div className="flex items-center justify-center h-40">
          <div className="text-red-500">Error loading courses: {error.message}</div>
        </div>
      </div>
    );
  }

  const coursesData = data?.getOrganizationCourses || [];
  
  // Filter enrolled courses (courses where enrollment exists)
  const enrolledCourses = coursesData.filter((item: OrganizationCoursesData) => 
    item.enrollment !== null
  );

  // Filter ongoing courses (enrolled but not completed)
  const ongoingCourses = enrolledCourses.filter((item: OrganizationCoursesData) => 
    item.enrollment && !item.enrollment.completed
  );

  // Filter pending/available courses (not enrolled yet)
  const pendingCourses = coursesData.filter((item: OrganizationCoursesData) => 
    item.enrollment === null
  );

  return (
    <div className="open-sans">
      <h1 className="text-xl max-md:text-lg font-bold mb-4">Ongoing Courses</h1>
      {ongoingCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ongoingCourses.map((item: OrganizationCoursesData) => (
            <Course 
              key={item.course._id}
              courseData={item.course}
              enrollmentData={item.enrollment}
              enrolled={true}
            />
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-center py-8">
          No ongoing courses found. Start a course to see it here!
        </div>
      )}

      <h1 className="text-xl max-md:text-lg font-bold mb-4 mt-8">
        Available Courses
      </h1>
      {pendingCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pendingCourses.map((item: OrganizationCoursesData) => (
            <Course 
              key={item.course._id}
              courseData={item.course}
              enrollmentData={null}
              enrolled={false}
            />
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-center py-8">
          No available courses found.
        </div>
      )}
    </div>
  );
};

export default EmployeeHome;