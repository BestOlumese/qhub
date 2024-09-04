import React from "react";
import Link from "next/link";
const CourseSlug = ({ slug }: { slug: string }) => {
  return (
    <div className="w-full bg-primary-light p-4 md:px-8 text-sm capitalize max-md:text-sm">
      <p>
        <Link href="/dashboard"> Home </Link>/ <Link href="/dashboard/courses">Courses</Link> /{" "}
        <span className="text-black/50">{slug}</span>
      </p>
    </div>
  );
};

export default CourseSlug;
