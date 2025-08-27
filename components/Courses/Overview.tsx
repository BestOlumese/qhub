import React from "react";
import { motion } from "framer-motion";

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

interface OverviewProps {
  courseData: CourseResponse;
}

const Overview = ({ courseData }: OverviewProps) => {
  const { course, enrollment } = courseData;

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 100,
      }}
      className="mt-6 space-y-6"
    >
      {/* Course Description */}
      <div>
        <h2 className="font-bold text-xl mb-3 text-gray-800">Course Description</h2>
        <p className="text-gray-600 leading-relaxed">
          {course.description || "This comprehensive course is designed to provide you with essential knowledge and practical skills. Through engaging content and hands-on activities, you'll develop a strong foundation in the subject matter."}
        </p>
      </div>

      {/* Course Details */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-semibold text-lg mb-4 text-gray-800">Course Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Category:</span>
            <span className="text-gray-600">{course.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Duration:</span>
            <span className="text-gray-600">{course.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Created:</span>
            <span className="text-gray-600">{formatDate(course.createdAt)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Last Updated:</span>
            <span className="text-gray-600">{formatDate(course.updatedAt)}</span>
          </div>
        </div>
      </div>

      {/* Enrollment Status */}
      {enrollment && (
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-3 text-blue-800">Your Progress</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-blue-700">Completion Status:</span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                enrollment.completed 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {enrollment.completed ? 'Completed' : 'In Progress'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-700">Progress:</span>
              <span className="text-blue-800 font-medium">{enrollment.progress}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-700">Started:</span>
              <span className="text-blue-700">{formatDate(enrollment.createdAt)}</span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Overview;