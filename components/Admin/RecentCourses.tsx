"use client"
import React from "react";
import Course from "@/components/Course";
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

const RecentCourses = () => {
  const organizationId = Cookies.get("organizationId") || "";

  const { data, loading, error } = useQuery(GET_ORGANIZATION_COURSES, {
    variables: { organizationId },
    errorPolicy: "all",
  });

  if (loading) {
    return (
      <div className="mt-6">
        <h3 className="mb-2 font-semibold">Recent courses</h3>
        <div className="flex items-center justify-center h-32">
          <div className="text-sm text-gray-500">Loading recent courses...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6">
        <h3 className="mb-2 font-semibold">Recent courses</h3>
        <div className="flex items-center justify-center h-32">
          <div className="text-red-500 text-sm">Error loading courses</div>
        </div>
      </div>
    );
  }

  const coursesData = data?.getOrganizationCourses || [];
  
  // Filter enrolled courses and sort by enrollment creation date (most recent first)
  const enrolledCourses = coursesData
    .filter((item: OrganizationCoursesData) => item.enrollment !== null)
    .sort((a: OrganizationCoursesData, b: OrganizationCoursesData) => {
      if (!a.enrollment || !b.enrollment) return 0;
      return new Date(b.enrollment.createdAt).getTime() - new Date(a.enrollment.createdAt).getTime();
    })
    .slice(0, 4); // Get only the 4 most recent

  return (
    <div className="mt-6">
      <h3 className="mb-2 font-semibold">Recent courses</h3>
      {enrolledCourses.length > 0 ? (
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-4 gap-6 w-full">
          {enrolledCourses.map((item: OrganizationCoursesData) => (
            <Course 
              key={item.course._id}
              courseData={item.course}
              enrollmentData={item.enrollment}
              enrolled={true}
            />
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-center py-6 text-sm">
          No recent courses found. Start a course to see it here!
        </div>
      )}
    </div>
  );
};

export default RecentCourses;