import HomePageStats from "@/components/Admin/HomepageStats";
import Course from "@/components/ui/Course";
import React from "react";
import TopViewedCourse from "../TopViewedCourse";
import MostActiveEmployees from "../MostActiveEmployees";

const AdminHome = () => {
  return (
    <div>
      <HomePageStats />
      <div className=" mt-6 ">
        <h3 className=" mb-2 font-semibold">Recent courses</h3>
        <div className="flex w-full gap-6">
          <Course enrolled={true} />
          <Course enrolled={true} />
          <Course enrolled={true} />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 mt-6 gap-6">
        <TopViewedCourse />
        <MostActiveEmployees />
      </div>
    </div>
  );
};

export default AdminHome;
