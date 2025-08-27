import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Image from "next/image";
import { Button } from "../ActionButton";
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
    onCompleted: (data) => {
      setIsEnrolling(false);
      toast.success(data.enrollCourse.message || "Successfully enrolled in course!");
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
      // Error handled in onError callback
      console.error("Enrollment error:", error);
    }
  };

  // Course info array with dynamic data
  const courseInfo = [
    {
      icon: <FiClock className="w-4 h-4" />,
      title: "Duration",
      content: course.duration
    },
    {
      icon: <FiBook className="w-4 h-4" />,
      title: "Category",
      content: course.category
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      title: "Level",
      content: "Beginner" // You might want to add this to your GraphQL schema
    },
    // {
    //   icon: <FiAward className="w-4 h-4" />,
    //   title: "Certificate",
    //   content: "Yes"
    // }
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
                <span className="text-xs font-medium text-gray-800">{enrollment.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${enrollment.progress}%` }}
                ></div>
              </div>
            </div>
            {/* <button 
              className="w-full bg-primary text-white py-2 px-4 rounded-md font-medium transition-all duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={false}
            >
              {enrollment.completed ? "Review Course" : "Continue Course"}
            </button> */}
          </div>
        ) : (
          <div className="mb-4">
            <button 
              onClick={handleEnrollCourse}
              disabled={isEnrolling}
              className="w-full bg-primary text-white py-2 px-4 rounded-md font-medium transition-all duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isEnrolling ? "Enrolling..." : "Start Course"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondGrid;