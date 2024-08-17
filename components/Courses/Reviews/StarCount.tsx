import React from "react";
import Star from "@/components/ui/Star";
const StarCount = () => {
  return (
    <div className="bg-primary-light/50 p-4 rounded-md col-span-3 flex items-center justify-center flex-col gap-4">
      <h1 className="font-bold text-6xl mb-2">4.9</h1>
      <Star starCount={5} className="text-xl" />
      <div className="w-full bg-darkGray rounded-md text-white p-3 flex items-center justify-center ">
        25 reviews
      </div>
    </div>
  );
};

export default StarCount;
