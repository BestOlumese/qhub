import React from "react";
import Image from "next/image";
import ProgressBar from "./ui/ProgressBar";
import Link from "next/link";
import { Button } from "./ui/button";

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

interface CourseProps {
  enrolled: boolean;
  courseData: CourseData;
  enrollmentData?: EnrollmentData | null;
}

const Course = ({ enrolled, courseData, enrollmentData }: CourseProps) => {
  return (
    <Link
      href={`/dashboard/courses/${courseData?._id}`}
      className="bg-white border border-gray-200 hover:shadow-md transition rounded-lg overflow-hidden flex flex-col"
    >
      <div className="relative w-full h-40">
        <Image
          src={courseData?.displayImageUrl || "/courseimage.png"}
          alt={courseData?.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h1 className="font-semibold text-base md:text-lg mb-2 line-clamp-2">
          {courseData?.title}
        </h1>

        {enrolled && enrollmentData ? (
          <>
            <p className="text-xs text-gray-600 mb-2">
              {courseData?.category} • {courseData?.duration}h
            </p>
            <div className="flex gap-2 my-2 items-center">
              <div className="flex-1">
                <ProgressBar max={100} value={enrollmentData.progress} />
              </div>
              <p className="text-xs whitespace-nowrap">
                {enrollmentData.progress}%
              </p>
            </div>
            <Button className="mt-auto w-full bg-primary">
              {enrollmentData.completed ? "Review" : "Continue"}
            </Button>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-700 line-clamp-3 flex-1">
              {courseData?.description || "No description available"}
            </p>
            <div className="border-t text-xs border-gray-200 flex justify-between mt-3 pt-2 text-gray-600">
              <span>{courseData?.duration}h</span>
              <span>{courseData?.category}</span>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default Course;
