import React from "react";
import { motion } from "framer-motion";
const Overview = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 100,
      }}
      className="mt-6"
    >
      <h2 className="font-bold">Course description</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam
        impedit nemo nisi necessitatibus laborum explicabo ratione
        exercitationem magnam quis.
      </p>
      <h2 className="font-bold mt-6">What you will learn from this course</h2>
      <ul>
        <li>Learn how to build a website</li>
        <li>Learn how to build a website</li>
        <li>Learn how to build a website</li>
        <li>Learn how to build a website</li>
      </ul>
    </motion.div>
  );
};

export default Overview;
