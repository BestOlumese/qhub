import React from "react";
import Course from "../Course";
import CourseSkeleton from "../CourseSkeletonLoader";

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

interface AllCoursesProps {
  showEnrolled: boolean;
  coursesData?: OrganizationCoursesData[];
  loading?: boolean;
}

const AllCourses = ({ showEnrolled, coursesData = [], loading }: AllCoursesProps) => {
  // Show skeletons if loading
  if (loading) {
    return (
      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <CourseSkeleton key={i} />
        ))}
      </div>
    );
  }

  // Filter courses based on enrollment status
  const filteredCourses = showEnrolled
    ? coursesData.filter((item) => item.enrollment !== null)
    : coursesData;

  if (filteredCourses.length === 0) {
    return (
      <div className="flex flex-col mt-6 items-center h-40 justify-center">
        <p className="text-gray-500 text-center">
          {showEnrolled ? "No enrolled courses found" : "No courses available"}
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredCourses.map((item) => (
        <Course
          key={item.course._id}
          courseData={item.course}
          enrollmentData={item.enrollment}
          enrolled={showEnrolled}
        />
      ))}
    </div>
  );
};

export default AllCourses;
