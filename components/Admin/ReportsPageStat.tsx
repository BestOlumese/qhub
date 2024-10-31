import React from "react";
import { reportsPageStat } from "@/lib/adminData";
import { Card, CardContent, CardHeader } from "../ui/card";

const ReportsPageStat = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2">
      {reportsPageStat.map((stat, index) => {
        const isPositive = stat.percent.includes("+");
        return (
          <Card
            key={index}
            className="flex items-center flex-col  w-full bg-white p-4  justify-center rounded-3xl"
          >
            <CardHeader className="p-0">
              <span className="w-8  text-primary h-8 flex items-center justify-center rounded-full bg-primary/20">
                {stat.icon}
              </span>
            </CardHeader>
            <CardContent className="p-0 flex flex-col items-center justify-center">
              <p className="font-plus text-2xl font-bold mt-2">{stat.value}</p>
              <p
                className={`text-xs font-plus  ${
                  isPositive ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.percent}
              </p>
              <p className=" font-plus text-sm mt-2 ">{stat.sub}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ReportsPageStat;
