import grid from "@/assets/icons/grid.svg";
import gradcap from "@/assets/icons/gradcap.svg";
import test from "@/assets/icons/test.svg";
import file from "@/assets/icons/file.svg";
import chart from "@/assets/icons/chart.svg";
import profile from "@/assets/icons/profile.svg";
import { title } from "process";
export const sidebar = [
  {
    name: "Home",
    icon: grid,
    link: "/dashboard",
  },
  {
    name: "Courses",
    icon: gradcap,
    link: "/dashboard/courses",
  },
  {
    name: "Tests",
    icon: test,
    link: "/dashboard/tests",
  },
  {
    name: "Resources",
    icon: file,
    link: "/dashboard/resources",
  },
  {
    name: "Reports",
    icon: chart,
    link: "/dashboard/reports",
  },
  {
    name: "Profile",
    icon: profile,
    link: "/dashboard/profile",
  },
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
    heading:
      "Whatr's complaint according to typical bank policies?",
    options: [
      "Listen to the customer’s complaint, acknowledge the issue, investigate the problem, provide a solution, and follow up to ensure satisfaction.",
      "Immediately escalate the complaint to the bank manager without acknowledging the customer’s issue or investigating the problem.",
      "Apologize to the customer, provide a temporary solution, and wait for the customer to contact the bank again if the issue persists.  ",
      "Offer the customer a refund or compensation right away without further investigation or follow-up.",
    ],
  },
];
