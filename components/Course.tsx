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
      className=" bg-primary-light cursor-pointer  py-4 flex gap-2 flex-col rounded-md"
    >
      <div className="px-4 w-full mb-4">
        <div className="relative w-full h-32 mb-2">
          <Image 
            src={courseData?.displayImageUrl || "/courseimage.png"} 
            alt={courseData?.title}
            fill
            className="object-cover rounded"
          />
        </div>
        <h1 className="font-bold max-lg:text-sm my-2">
          {courseData?.title}
        </h1>
        
        {enrolled && enrollmentData ? (
          <div>
            <p className="text-xs my-2">
              {courseData?.category} | {courseData?.duration}
            </p>

            <div className="flex gap-2 my-1 items-center">
              <div className="w-[100%] lg:w-[60%]">
                <ProgressBar max={100} value={enrollmentData.progress} />
              </div>
              <p className="text-xs">
                {enrollmentData.progress}% <span className="max-lg:hidden">completed</span>
              </p>
            </div>
            <Button className="mt-4 bg-primary w-full">
              {enrollmentData.completed ? "Review" : "Continue"}
            </Button>
          </div>
        ) : (
          <div>
            <p className="text-sm">
              {courseData?.description || "No description available"}
            </p>

            <div className="border-t text-sm border-t-black/20 w-full flex gap-4 mt-2 items-center p-2 pb-0 px-3 ">
              <p>{courseData?.duration}</p>
              <hr className="rotate-90 border border-black/20 w-6" />
              <p>{courseData?.category}</p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Course;