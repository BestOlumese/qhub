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
    name: "My Profile",
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
