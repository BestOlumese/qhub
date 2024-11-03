import grid from "@/assets/icons/grid.svg";
import gradcap from "@/assets/icons/gradcap.svg";
import test from "@/assets/icons/test.svg";
import file from "@/assets/icons/file.svg";
import chart from "@/assets/icons/chart.svg";
import profile from "@/assets/icons/profile.svg";
import {
  IconBook,
  IconBriefcase2,
  IconChartPie,
  IconChecks,
  IconFile,
  IconLayout2,
  IconPuzzle,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";
import { GoMortarBoard } from "react-icons/go";
export const sidebar = [
  {
    name: "Dashboard",
    icon: <IconLayout2 />,
    link: "/dashboard",
  },
  {
    name: "Employees",
    icon: <IconBriefcase2 />,
    link: "/dashboard/employees",
  },
  {
    name: "Courses",
    icon: <GoMortarBoard className="font-[1000] text-2xl" />,
    link: "/dashboard/courses",
  },
  // {
  //   name: "Tests",
  //   icon: <IconPuzzle />,
  //   link: "/dashboard/tests",
  // },
  {
    name: "Resources",
    icon: <IconFile />,
    link: "/dashboard/resources",
  },
  // {
  //   name: "Reports",
  //   icon: <IconChartPie />,
  //   link: "/dashboard/reports",
  // },
  // {
  //   name: "Profile",
  //   icon: <IconUser />,
  //   link: "/dashboard/profile",
  // },
];

export const modules = [
  {
    name: "Module 1",
    lessons: [
      {
        content: "lorem ipsum dolor sit amet",
      },
      {
        content: "lorem ipsum dolor sit amet",
      },
      {
        content: "lorem ipsum dolor sit amet",
      },
    ],
  },
  {
    name: "Module 2",
    lessons: [
      {
        content: "lorem ipsum dolor sit amet",
      },
      {
        content: "lorem ipsum dolor sit amet",
      },
      {
        content: "lorem ipsum dolor sit amet",
      },
    ],
  },
  {
    name: "Module 3",
    lessons: [
      {
        content: "lorem ipsum dolor sit amet",
      },
      {
        content: "lorem ipsum dolor sit amet",
      },
      {
        content: "lorem ipsum dolor sit amet",
      },
    ],
  },
  {
    name: "Module 4",
    lessons: [
      {
        content: "lorem ipsum dolor sit amet",
      },
      {
        content: "lorem ipsum dolor sit amet",
      },
      {
        content: "lorem ipsum dolor sit amet",
      },
    ],
  },
  {
    name: "Module 5",
    lessons: [
      {
        content: "lorem ipsum dolor sit amet",
      },
      {
        content: "lorem ipsum dolor sit amet",
      },
      {
        content: "lorem ipsum dolor sit amet",
      },
    ],
  },
];

export const reviews = [
  {
    name: "John Doe",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eius cum consequuntur alias labore ipsam quos, quae dolores dignissimos quisquam.",
    date: "April 29, 2021",
  },
  {
    name: "Jane Doe",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eius cum consequuntur alias labore ipsam quos, quae dolores dignissimos quisquam.",
    date: "April 29, 2021",
  },
  {
    name: "John Doe",
    rating: 3,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eius cum consequuntur alias labore ipsam quos, quae dolores dignissimos quisquam.",
    date: "April 29, 2021",
  },
  {
    name: "Jane Doe",
    rating: 2,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eius cum consequuntur alias labore ipsam quos, quae dolores dignissimos quisquam.",
    date: "April 29, 2021",
  },
  {
    name: "John Doe",
    rating: 1,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eius cum consequuntur alias labore ipsam quos, quae dolores dignissimos quisquam.",
    date: "April 29, 2021",
  },
];

import duration from "@/assets/icons/clock.svg";
import enrolled from "@/assets/icons/users.svg";
import language from "@/assets/icons/globe.svg";
import lessons from "@/assets/icons/file.svg";
import certificate from "@/assets/icons/award.svg";
export const courseinfo = [
  {
    icon: duration,
    title: "Duration",
    content: "6 weeks",
  },
  {
    icon: enrolled,
    title: "Enrolled",
    content: "25 students",
  },
  {
    icon: language,
    title: "Language",
    content: "English",
  },
  {
    icon: lessons,
    title: "Lessons",
    content: "12",
  },
  {
    icon: certificate,
    title: "Certificate",
    content: "Yes",
  },
];

export const tests = [
  {
    title: "Customer Service Excellence Test",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    isLocked: false,
  },
  {
    title: "Customer Test",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    isLocked: false,
  },
  {
    title: "Customer Test",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    isLocked: false,
  },
  {
    title: "Customer Test",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    isLocked: true,
  },
  {
    title: "Customer Test",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    isLocked: true,
  },
  {
    title: "Customer Test",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    isLocked: true,
  },
  {
    title: "Customer Test",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    isLocked: true,
  },
  {
    title: "Customer Test",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    isLocked: true,
  },
  {
    title: "Customer Test",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    isLocked: true,
  },
  {
    title: "Customer Test",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    isLocked: true,
  },
];

export const QUESTIONS = [
  {
    title: "Question 1",
    heading:
      "What is the correct process for resolving a customer's complaint according to typical bank policies?",
    options: [
      "Listen to the customer’s complaint, acknowledge the issue, investigate the problem, provide a solution, and follow up to ensure satisfaction.",
      "Immediately escalate the complaint to the bank manager without acknowledging the customer’s issue or investigating the problem.",
      "Apologize to the customer, provide a temporary solution, and wait for the customer to contact the bank again if the issue persists.  ",
      "Offer the customer a refund or compensation right away without further investigation or follow-up.",
    ],
  },
  {
    title: "Question 2",
    heading:
      "What is th process for resolving a customer's complaint according to typical bank policies?",
    options: [
      "Listen to the customer’s complaint, acknowledge the issue, investigate the problem, provide a solution, and follow up to ensure satisfaction.",
      "Immediat escalate the complaint to the bank manager without acknowledging the customer’s issue or investigating the problem.",
      "Apologize to the customer, provide a temporary solution, and wait for the customer to contact the bank again if the issue persists.  ",
      "Offer the customer a refund or compensation right away without further investigation or follow-up.",
    ],
  },
  {
    title: "Question 3",
    heading:
      "What is the correct process for resolving a customer's complaint according to typical bank policies?",
    options: [
      "Listen to the customer’s complaint, acknowledge the issue, investigate the problem, provide a solution, and follow up to ensure satisfaction.",
      "Immescalate the complaint to the bank manager without acknowledging the customer’s issue or investigating the problem.",
      "Apologize to the customer, provide a temporary solution, and wait for the customer to contact the bank again if the issue persists.  ",
      "Offer the customer a refund or compensation right away without further investigation or follow-up.",
    ],
  },
  {
    title: "Question 4",
    heading:
      "Whatrect process for resolving a customer's complaint according to typical bank policies?",
    options: [
      "Listen ttomer’s complaint, acknowledge the issue, investigate the problem, provide a solution, and follow up to ensure satisfaction.",
      "Immediately escalate the complaint to the bank manager without acknowledging the customer’s issue or investigating the problem.",
      "Apologize to the customer, provide a temporary solution, and wait for the customer to contact the bank again if the issue persists.  ",
      "Offer the customer a refund or compensation right away without further investigation or follow-up.",
    ],
  },
  {
    title: "Question 5",
    heading: "Whatr's complaint according to typical bank policies?",
    options: [
      "Listen to the customer’s complaint, acknowledge the issue, investigate the problem, provide a solution, and follow up to ensure satisfaction.",
      "Immediately escalate the complaint to the bank manager without acknowledging the customer’s issue or investigating the problem.",
      "Apologize to the customer, provide a temporary solution, and wait for the customer to contact the bank again if the issue persists.  ",
      "Offer the customer a refund or compensation right away without further investigation or follow-up.",
    ],
  },
];
import resource1 from "@/public/resource1.png";
import resource2 from "@/public/resource2.png";
import resource3 from "@/public/resource3.png";
import resource4 from "@/public/resource4.png";
import resource5 from "@/public/resource5.png";
import resource6 from "@/public/resource6.png";
import resource7 from "@/public/resource7.png";
export const resources = [
  {
    name: "Resource 1",
    image: resource1,
    type: "PDF",
  },
  {
    name: "Resource 2",
    image: resource2,
    type: "PDF",
  },
  {
    name: "Resource 3",
    image: resource3,
    type: "Excel",
  },
  {
    name: "Resource 4",
    image: resource4,
    type: "PDF",
  },
  {
    name: "Resource 5",
    image: resource5,
    type: "Checklist",
  },
  {
    name: "Resource 6",
    image: resource6,
    type: "PDF",
  },
  {
    name: "Resource 7",
    image: resource7,
    type: "Excel",
  },
];

export const homepageStats = [
  {
    sub: "No of Courses",
    value: "30",
    icon: <IconBook className="text-primary w-5 h-5" />,
  },
  {
    sub: "No of Employees",
    value: "500",

    icon: <IconUsers className="text-primary w-5 h-5" />,
  },
  {
    sub: "No of Completed Courses",
    value: "500",
    icon: <IconChecks className="text-primary w-5 h-5" />,
  },
  {
    sub: "No of Enrollments",
    value: "100",
    icon: <IconBook className="text-primary w-5 h-5" />,
  },
];
export const topratedCourses = [
  {
    course: "Introduction to JavaScript",
    ratings: 5.0,
  },
  {
    course: "Introduction to JavaScript",
    ratings: 4.5,
  },
  {
    course: "Introduction to JavaScript",
    ratings: 4.2,
  },
  {
    course: "JavaScript for Beginners",
    ratings: 3.8,
  },
  {
    course: "Learn JavaScript",
    ratings: 3.5,
  },
];
import avatar from "@/public/avatar.svg";
export const mostActiveEmployees = [
  {
    name: "John Doe",
    email: "taiwo@gmail.com",
    picture: avatar,
    coursesTaken: 5,
  },
  {
    name: "Jane Doe",
    email: "taiwo@gmail.com",
    picture: avatar,
    coursesTaken: 4,
  },
  {
    name: "John Doe",
    email: "taiwo@gmail.com",
    picture: avatar,
    coursesTaken: 3,
  },
  {
    name: "Jane Doe",
    email: "taiwo@gmail.com",
    picture: "",
    coursesTaken: 2,
  },
  {
    name: "John Doe",
    email: "taiwo@gmail.com",
    picture: "",
    coursesTaken: 1,
  },
];
