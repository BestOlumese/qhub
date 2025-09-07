// components/resources/ResourceSkeleton.tsx
"use client";
import React from "react";

const ResourceSkeleton = () => {
  return (
    <div className="mt-7 grid max-xl:grid-cols-3 max-md:grid-cols-2 grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden animate-pulse"
        >
          {/* Skeleton Preview */}
          <div className="aspect-[4/3] bg-gray-100" />

          {/* Skeleton Info */}
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="flex justify-between items-center">
              <div className="h-5 w-16 bg-gray-200 rounded-full" />
              <div className="h-3 w-12 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourceSkeleton;
