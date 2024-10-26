import ReportsPageStat from "@/components/Admin/ReportsPageStat";
import LearningTimeChart from "@/components/Charts/LearningTimeChart";
import Course from "@/components/ui/Course";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const Page = () => {
  return (
    <div className="p-6">
      <ReportsPageStat />
      <LearningTimeChart />
    </div>
  );
};

export default Page;
