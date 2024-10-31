import React from "react";
import { IconCirclePlus } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "./ui/button";
import CourseTable from "./Tables/CoursesTable";

const AdminCoursesPage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-semibold">List of Courses</h2>
        <Link href="/dashboard/courses/create">
          <Button className="bg-primary hover:bg-primary/90 text-white flex items-center ">
            <IconCirclePlus className="inline mr-2 w-5 h-5" />
            Create Course
          </Button>
        </Link>
      </div>
      <CourseTable />
    </div>
  );
};

export default AdminCoursesPage;
