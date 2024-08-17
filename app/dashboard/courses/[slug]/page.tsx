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
    <div className="overflow-y-auto max-h-[650px]">
      <CourseSlug slug={slug} />

      <div className="p-7 grid grid-cols-12 gap-10 ">
        <FirstGrid />
        <SecondGrid />
      </div>
    </div>
  );
};

export default CourseContent;
