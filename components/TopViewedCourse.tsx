import React from "react";

import { topratedCourses } from "@/lib/data";
import { IconBook } from "@tabler/icons-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";

const TopViewedCourse = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold  text-lg">Top rated Courses</CardTitle>
        <CardDescription className="text-sm">
          View the top rated courses on the platform
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {topratedCourses.map((item, index) => (
          <div className="flex items-center gap-4 w-full" key={index}>
            <IconBook className="w-5 h-5" />
            <div className="w-[calc(100%-25px)] flex justify-between items-center">
              <p className=" overflow-x-auto  max-w-full scrollbar whitespace-nowrap">
                {item.course}
              </p>
              <p className="text-sm max-w-full whitespace-nowrap overflow-x-auto scrollbar ">
                {item.ratings}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopViewedCourse;
