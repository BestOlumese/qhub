import React from "react";

import { homepageStats } from "@/lib/data";
import { Card, CardHeader, CardContent } from "../ui/card";

const HomepageStats = () => {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-4 gap-6">
      {homepageStats.map((stat, index) => (
        <Card
          key={index}
          className="flex items-center flex-col p-4 gap-2  w-full bg-white justify-center rounded-3xl"
        >
          <CardHeader className="p-0">
            <span className="w-8  text-primary h-8 flex items-center justify-center rounded-full bg-primary/20">
              {stat.icon}
            </span>
          </CardHeader>
          <CardContent className="p-0 flex flex-col items-center justify-center">
            <p className="font-plus text-2xl max-md:text-xl font-bold">
              {stat.value}
            </p>
            <p className=" font-plus text-sm max-md:text-xs text-center">
              {stat.sub}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HomepageStats;
