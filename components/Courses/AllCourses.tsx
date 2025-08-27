import React from "react";
import Course from "../Course";

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
}

const AllCourses = ({ showEnrolled, coursesData = [] }: AllCoursesProps) => {
  // Filter courses based on enrollment status
  const filteredCourses = showEnrolled 
    ? coursesData.filter(item => item.enrollment !== null)
    : coursesData;

  if (filteredCourses.length === 0) {
    return (
      <div className="flex flex-col mt-4 max-lg:items-center overflow-y-auto overflow-hidden scrollbar">
        <div className="flex items-center justify-center h-40">
          <p className="text-gray-500">
            {showEnrolled ? "No enrolled courses found" : "No courses available"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" flex flex-col mt-4 max-lg:items-center overflow-y-auto overflow-hidden scrollbar">
      <div className="flex flex-col  md:grid md:grid-cols-2 xl:grid-cols-4 gap-6 ">
        {filteredCourses.map((item) => (
          <Course 
            key={item.course._id}
            courseData={item.course}
            enrollmentData={item.enrollment}
            enrolled={showEnrolled}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;