"use client";
import React from "react";

const Menu = ({
  showEnrolled,
  setShowEnrolled,
}: {
  showEnrolled: boolean;
  setShowEnrolled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <menu className="flex gap-4 border border-transparent border-b-black/20 w-full">
      <div>
        <p
          onClick={() => setShowEnrolled(false)}
          className={`${
            !showEnrolled ? "text-black" : " text-black/30"
          } cursor-pointer`}
        >
          All Courses
        </p>
        {!showEnrolled && (
          <div className="bg-primary rounded-full w-full h-1 mt-2" />
        )}
      </div>
      <div>
        <p
          onClick={() => setShowEnrolled(true)}
          className={`${
            showEnrolled ? "text-black" : " text-black/30"
          } cursor-pointer`}
        >
          Enrolled Courses
        </p>
        {showEnrolled && (
          <div className="bg-primary rounded-full w-full h-1 mt-2" />
        )}
      </div>
    </menu>
  );
};

export default Menu;
