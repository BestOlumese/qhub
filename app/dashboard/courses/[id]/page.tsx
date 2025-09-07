"use client";
import { useQuery } from "@apollo/client";
import FirstGrid from "@/components/Courses/FirstGrid";
import CourseSlug from "@/components/Courses/CourseSlug";
import React from "react";
import SecondGrid from "@/components/Courses/SecondGrid";
import { GET_ORGANIZATION_COURSE_BY_ID, GET_COURSE_MODULES } from "@/lib/graphql";
import CourseLoader from "@/components/ui/CourseLoader";

const CourseContent = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const courseId = params.id;
  console.log(courseId);
  

  const { 
    data: courseData, 
    loading: courseLoading, 
    error: courseError 
  } = useQuery(GET_ORGANIZATION_COURSE_BY_ID, {
    variables: { courseId },
    errorPolicy: 'all'
  });

  const { 
    data: modulesData, 
    loading: modulesLoading, 
    error: modulesError 
  } = useQuery(GET_COURSE_MODULES, {
    variables: { courseId },
    errorPolicy: 'all'
  });

  if (courseLoading || modulesLoading) {
    return (
      <CourseLoader />
    );
  }

  if (courseError || modulesError) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-red-500">
          Error loading course: {courseError?.message || modulesError?.message}
        </div>
      </div>
    );
  }

  const course = courseData?.getCourseById;
  const modules = modulesData?.getModulesForCourse || [];

  if (!course) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-gray-500">Course not found</div>
      </div>
    );
  }

  return (
    <div className="h-full scrollbar">
      <CourseSlug slug={course.course.title} />

      <div className="lg:p-7 p-4 grid grid-cols-12 lg:gap-4 xl:gap-6 ">
        <FirstGrid 
          courseData={course}
          modulesData={modules}
        />
        <SecondGrid 
          courseData={course}
          modulesData={modules}
        />
      </div>
    </div>
  );
};

export default CourseContent;