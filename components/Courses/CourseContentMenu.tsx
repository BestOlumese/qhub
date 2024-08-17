import React from "react";
import { motion } from "framer-motion";
const CourseContentMenu = ({
  active,
  setActive,
}: {
  active: string;
  setActive: (name: string) => void;
}) => {
  const menuItems = [
    {
      name: "overview",
      label: "Overview",
    },
    {
      name: "curriculum",
      label: "Curriculum",
    },

    {
      name: "instructor",
      label: "Instructor",
    },
    {
      name: "reviews",
      label: "Reviews",
    },
  ];
  return (
    <menu className="flex gap-12 border mt-6 border-transparent border-b-black/20 w-full">
      {menuItems.map((item, index) => (
        <div className="flex flex-col" key={index}>
          <p
            onClick={() => setActive(item.name)}
            className={`${
              active === item.name ? "text-black font-bold" : " text-black/30"
            } cursor-pointer`}
          >
            {item.label}
          </p>
          {active === item.name && (
            <motion.div
              layoutId="tab-indicator"
              className="bg-primary rounded-full w-full h-1 mt-2"
            />
          )}
        </div>
      ))}
    </menu>
  );
};

export default CourseContentMenu;
