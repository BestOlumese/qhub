import React from "react";

import Image from "next/image";
import { homepageStats } from "@/lib/data";

const HomepageStats = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {homepageStats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center  shadow-md gap-4 p-5 w-full bg-white border border-gray-300 justify-between rounded-3xl"
        >
          <div>
            <p className=" font-plus text-xs mb-1 ">{stat.sub}</p>
            <div className="flex items-center gap-2">
              <p className="font-plus text-2xl font-bold">{stat.value}</p>
              <p
                className={`text-primary font-plus text-sm font-bold ${
                  stat.percent.includes("-") ? "text-[#E31A1A]" : "text-primary"
                } `}
              >
                {stat.percent}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-primary/10 rounded-xl w-12 h-12 justify-center p-1">
            <Image src={stat.icon} alt={stat.sub} width={25} height={25} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomepageStats;
