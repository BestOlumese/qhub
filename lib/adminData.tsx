import {
  IconBook,
  IconCertificate,
  IconChecks,
  IconClock,
  IconUsers,
} from "@tabler/icons-react";
export const reportsPageStat = [
  {
    sub: "Course Enrollments",
    value: "500",
    percent: "+10% since last month",
    icon: <IconBook className="text-primary w-5 h-5" />,
  },
  {
    sub: "Average daily learning time",
    percent: "+10% from yesterday",
    value: "5hrs",
    icon: <IconClock className="text-primary w-5 h-5" />,
  },
  {
    sub: "Certificates awarded",
    percent: "-10% since last month",
    value: "500",
    icon: <IconCertificate className="text-primary w-5 h-5" />,
  },
  {
    sub: "Total Employees",
    percent: "+10% since last month",
    value: "500",
    icon: <IconUsers className="text-primary w-5 h-5" />,
  },
];
import {
  IconDropletHalf2Filled,
  IconStarHalfFilled,
  IconViewfinder,
} from "@tabler/icons-react";
export const questionTypes = [
  {
    type: "True/False",
    description: "True or False question",
    icon: <IconStarHalfFilled className="w-5 h-5" />,
    color: "bg-primary",
    value: "true/false",
  },
  {
    type: "Multiple Choice",
    description: "Question with multiple options",
    icon: <IconChecks className="w-5 h-5" />,
    color: "bg-purple-500",
    value: "multiple-choice",
  },
  {
    type: "Short Answer",
    description: "Question with short text answer",
    icon: <IconViewfinder className="w-5 h-5" />,
    color: "bg-orange-500",
    value: "short-answer",
  },
  // {
  //   type: "Fill in the blanks",
  //   description: "Students have to complete the sentence",
  //   icon: <IconDropletHalf2Filled className="w-5 h-5" />,
  //   color: "bg-red-500",
  //   value: "fill-in-the-blanks",
  // },
];
