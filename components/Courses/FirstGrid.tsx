"use client";
import React, { useState } from "react";
import Image from "next/image";
import CourseContentMenu from "./CourseContentMenu";
import { AnimatePresence } from "framer-motion";
import Overview from "./Overview";
import Curriculum from "./Curriculum";
import Instructor from "./Instructor";
import Reviews from "./Reviews";

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

interface ModuleData {
  _id: string;
  name: string;
  summary: string;
  course: CourseData;
  createdAt: string;
  updatedAt: string;
}

interface FirstGridProps {
  courseData: CourseResponse;
  modulesData: ModuleData[];
}

const FirstGrid = ({ courseData, modulesData }: FirstGridProps) => {
  const [active, setActive] = useState("overview");

  return (
    <div className="col-span-9 max-xl:col-span-12">
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src={courseData.course.displayImageUrl || "/courseimagebig.png"}
          alt={courseData.course.title}
          fill
          className="rounded-sm object-cover"
        />
      </div>
      
      <CourseContentMenu active={active} setActive={setActive} />
      
      <div className="my-4 mb-12">
        <AnimatePresence mode="wait">
          {active === "overview" && (
            <Overview courseData={courseData} />
          )}
          {active === "curriculum" && (
            <Curriculum courseId={courseData.course._id} modulesData={modulesData} />
          )}
          {active === "instructor" && <Instructor />}
          {active === "reviews" && <Reviews />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FirstGrid;