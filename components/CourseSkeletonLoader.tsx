import React from "react";

const CourseSkeleton = () => {
  return (
    <div className="bg-gray-100 animate-pulse rounded-md p-4 flex flex-col gap-4">
      <div className="w-full h-32 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      <div className="flex gap-2 items-center">
        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
        <div className="h-2 bg-gray-200 rounded w-1/4"></div>
      </div>
      <div className="h-8 bg-gray-300 rounded"></div>
    </div>
  );
};

export default CourseSkeleton;
