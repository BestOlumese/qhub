import React from "react";
import { reportsPageStat } from "@/lib/adminData";

const ReportsPageStat = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {reportsPageStat.map((stat, index) => {
        const isPositive = stat.percent.includes("+");
        return (
          <div
            key={index}
            className="flex items-center flex-col p-4 shadow-md  w-full bg-white border border-gray-300 justify-center rounded-3xl"
          >
            <span className="w-8  text-primary h-8 flex items-center justify-center rounded-full bg-primary/20">
              {stat.icon}
            </span>
            <p className="font-plus text-2xl font-bold mt-2">{stat.value}</p>
            <p
              className={`text-xs font-plus  ${
                isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {stat.percent}
            </p>
            <p className=" font-plus text-sm mt-2 ">{stat.sub}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ReportsPageStat;
