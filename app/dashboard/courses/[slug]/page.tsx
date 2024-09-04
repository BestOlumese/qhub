import FirstGrid from "@/components/Courses/FirstGrid";
import CourseSlug from "@/components/Courses/CourseSlug";
import React from "react";
import SecondGrid from "@/components/Courses/SecondGrid";

const CourseContent = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const slug = params.slug.replace(/-/g, " ");
  return (
    <div className="h-full  scrollbar">
      <CourseSlug slug={slug} />

      <div className="lg:p-7 p-4 grid grid-cols-12 lg:gap-4 xl:gap-6 ">
        <FirstGrid />
        <SecondGrid />
      </div>
    </div>
  );
};

export default CourseContent;
