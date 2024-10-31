import HomepageStats from "./HomepageStats";
import React from "react";
import TopViewedCourse from "../TopViewedCourse";
import MostActiveEmployees from "../MostActiveEmployees";
import { IconCirclePlus } from "@tabler/icons-react";
import { Button } from "../ui/button";
import RecentCourses from "./RecentCourses";
import Link from "next/link";
import InviteEmployeeSheet from "./InviteEmployeeSheet";
const AdminHome = () => {
  return (
    <div className="">
      <div className="flex max-md:flex-col justify-between mb-4">
        <h2 className="font-semibold">Dashboard</h2>
        <div className="flex gap-2 max-md:mt-2">
          <Link href="/dashboard/courses/create">
            <Button variant={"outline"}>
              <IconCirclePlus className="inline mr-2 w-5 h-5" />
              Create Course
            </Button>
          </Link>{" "}
          <InviteEmployeeSheet />
        </div>
      </div>
      <HomepageStats />
      <RecentCourses />
      <div className="w-full grid  lg:grid-cols-2 mt-6 gap-6">
        <TopViewedCourse />
        <MostActiveEmployees />
      </div>
    </div>
  );
};

export default AdminHome;
