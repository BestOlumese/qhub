// components/SecondGrid.tsx
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Image from "next/image";
import { FiClock, FiBook, FiUsers } from "react-icons/fi";
import { ENROLL_COURSE } from "@/lib/graphql";
import { GET_ORGANIZATION_COURSE_BY_ID } from "@/lib/graphql";
import toast from "react-hot-toast";

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

interface CourseResponse {
  course: CourseData;
  enrollment: EnrollmentData | null;
}

interface SecondGridProps {
  courseData: CourseResponse;
}

const SecondGrid = ({ courseData }: SecondGridProps) => {
  const { course, enrollment } = courseData;
  const [isEnrolling, setIsEnrolling] = useState(false);

  const [enrollCourseMutation] = useMutation(ENROLL_COURSE, {
    refetchQueries: [
      {
        query: GET_ORGANIZATION_COURSE_BY_ID,
        variables: { courseId: course._id }
      }
    ],
    onCompleted: () => {
      setIsEnrolling(false);
      toast.success("Successfully enrolled in course!");
    },
    onError: (error) => {
      setIsEnrolling(false);
      toast.error(error.message || "Failed to enroll in course");
    }
  });

  const handleEnrollCourse = async () => {
    setIsEnrolling(true);
    try {
      await enrollCourseMutation({
        variables: { courseId: course._id }
      });
    } catch (error) {
      console.error("Enrollment error:", error);
    }
  };

  // Course info array with dynamic data
  const courseInfo = [
    {
      icon: <FiClock className="w-4 h-4" />,
      title: "Duration",
      content: `${course.duration} hours`
    },
    {
      icon: <FiBook className="w-4 h-4" />,
      title: "Category",
      content: course.category
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      title: "Level",
      content: "Beginner"
    }
  ];

  return (
    <div className="bg-primary-light col-span-3 text-sm h-fit sticky top-0 max-xl:hidden">
      <div className="w-full">
        {course.introVideoUrl ? (
          <video 
            src={course.introVideoUrl}
            poster={course.displayImageUrl || "/womanspeaking.png"}
            className="w-full h-48 object-cover rounded-t"
            preload="metadata"
            controls
          />
        ) : course.displayImageUrl ? (
          <Image 
            src={course.displayImageUrl} 
            alt="Course preview" 
            width={500}
            height={200}
            className="w-full h-48 object-cover rounded-t"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t">
            <span className="text-gray-500">No preview available</span>
          </div>
        )}
      </div>
      
      <div className="px-4 pb-5">
        <ul className="mb-5">
          {courseInfo.map((info, index) => (
            <li
              key={index}
              className="flex my-4 justify-between items-center border-b py-2 border-b-slate-300"
            >
              <span className="flex font-bold items-center justify-center gap-2">
                {info.icon}
                {info.title}
              </span>
              <p>{info.content}</p>
            </li>
          ))}
        </ul>

        {enrollment ? (
          <div className="mb-4">
            <div className="bg-white rounded-lg p-3 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-gray-600">Progress</span>
                <span className="text-xs font-medium text-gray-800">
                  {enrollment.progress.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    enrollment.completed ? 'bg-green-500' : 'bg-primary'
                  }`}
                  style={{ width: `${Math.min(enrollment.progress, 100)}%` }}
                ></div>
              </div>
              {enrollment.completed && (
                <div className="mt-2 flex items-center gap-1 text-green-600 text-xs">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Course Completed!</span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <button 
              onClick={handleEnrollCourse}
              disabled={isEnrolling}
              className="w-full bg-primary text-white py-2 px-4 rounded-md font-medium transition-all duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isEnrolling ? "Enrolling..." : "🚀 Start Course"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondGrid;