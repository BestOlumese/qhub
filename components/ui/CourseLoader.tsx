// components/ui/CourseLoader.tsx
"use client";
import React from "react";

const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent";

const CourseLoader = () => {
  return (
    <div className="h-full w-full p-6 animate-pulse">
      {/* Course Title Skeleton */}
      <div className={`h-8 w-1/3 mb-6 rounded-md bg-gray-200 ${shimmer}`} />

      <div className="grid grid-cols-12 gap-6">
        {/* Left Grid */}
        <div className="col-span-12 lg:col-span-8 space-y-4">
          <div className={`h-40 rounded-lg bg-gray-200 ${shimmer}`} />
          <div className={`h-32 rounded-lg bg-gray-200 ${shimmer}`} />
          <div className={`h-24 rounded-lg bg-gray-200 ${shimmer}`} />
        </div>

        {/* Right Grid */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          <div className={`h-56 rounded-lg bg-gray-200 ${shimmer}`} />
          <div className={`h-40 rounded-lg bg-gray-200 ${shimmer}`} />
        </div>
      </div>
    </div>
  );
};

export default CourseLoader;
