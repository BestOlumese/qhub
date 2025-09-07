// components/ui/SkeletonStats.tsx
import React from "react";

const SkeletonStats = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm animate-pulse">
      <div className="w-8 h-8 rounded-full mx-auto bg-gray-200 mb-4" />
      <div className="w-8 h-4 bg-gray-200 rounded mx-auto mb-2" />
      <div className="h-3 bg-gray-200 rounded w-20 mx-auto" />
    </div>
  );
};

export default SkeletonStats;
