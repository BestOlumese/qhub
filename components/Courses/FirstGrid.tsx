"use client";
import React, { useState } from "react";
import Image from "next/image";
import courseimage from "@/public/courseimagebig.png";
import CourseContentMenu from "./CourseContentMenu";
import { AnimatePresence } from "framer-motion";
import Overview from "./Overview";
import Curriculum from "./Curriculum";
import Instructor from "./Instructor";
import Reviews from "./Reviews";
const FirstGrid = () => {
  const [active, setActive] = useState("overview");
  return (
    <div className="col-span-9">
      <Image
        src={courseimage}
        alt="course image"
        // width=
        className="rounded-sm w-full "
      />
      <CourseContentMenu active={active} setActive={setActive} />
      <div className="my-4 mb-12">
        <AnimatePresence mode="wait">
          {active === "overview" && <Overview />}
          {active === "curriculum" && <Curriculum />}
          {active === "instructor" && <Instructor />}
          {active === "reviews" && <Reviews />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FirstGrid;
