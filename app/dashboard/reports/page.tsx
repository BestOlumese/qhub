import ReportsPageStat from "@/components/Admin/ReportsPageStat";
import CourseCategoryChart from "@/components/Charts/CourseCategoryChart";
import CourseCompletionChart from "@/components/Charts/CourseCompletionChart";
import CourseEnrollmentChart from "@/components/Charts/CourseEnrollmentChart";
import EmployeeChart from "@/components/Charts/EmployeeChart";
import LearningTimeChart from "@/components/Charts/LearningTimeChart";
import React from "react";

const Page = () => {
  return (
    <div className="p-6">
      <div className="grid gap-6">
        <ReportsPageStat />
        <LearningTimeChart />
      </div>
      <div className="grid lg:grid-cols-2 mt-6 gap-6">
        <CourseEnrollmentChart />
        <CourseCompletionChart />
      </div>
      <div className="grid lg:grid-cols-2 mt-6 gap-6">
        <CourseCategoryChart />
        <EmployeeChart />
      </div>
    </div>
  );
};

export default Page;
