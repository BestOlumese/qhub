import React from "react";
import { IconCirclePlus } from "@tabler/icons-react";
import Link from "next/link";
const AdminCoursesPage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-semibold">List of Courses</h2>
        <Link href="/dashboard/courses/create">
          <button className="bg-primary text-white px-4 p-2 rounded-md flex items-center ">
            <IconCirclePlus className="inline mr-2 w-5 h-5" />
            Create New Course
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminCoursesPage;
