import React from "react";
import Course from "@/components/ui/Course";

const DashboardHome = () => {
  return (
    <div className="p-2 open-sans">
      <h1 className="text-xl font-bold mb-4">Ongoing Courses</h1>
      <Course enrolled={true} />
    </div>
  );
};

export default DashboardHome;
