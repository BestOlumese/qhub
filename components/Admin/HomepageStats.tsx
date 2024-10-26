import React from "react";

import Image from "next/image";
import { homepageStats } from "@/lib/data";

const HomepageStats = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {homepageStats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center flex-col p-4 shadow-md gap-2  w-full bg-white border border-gray-300 justify-center rounded-3xl"
        >
          <span className="w-8  text-primary h-8 flex items-center justify-center rounded-full bg-primary/20">
            {stat.icon}
          </span>
          <p className="font-plus text-2xl font-bold">{stat.value}</p>
          <p className=" font-plus text-sm mb-1 ">{stat.sub}</p>
        </div>
      ))}
    </div>
  );
};

export default HomepageStats;
