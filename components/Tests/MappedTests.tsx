import React from "react";
import { tests } from "@/lib/data";
import { IoIosLock } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const MappedTests = () => {
  const getSlug = (title: string) => {
    return title.replace(/\s+/g, "-").toLowerCase();
  };
  return (
    <div className="overflow-y-auto grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 ">
      {tests.map((test, index) => (
        <div
          key={index}
          className="border-gray-300 rounded-xl p-3 md:p-6 border relative max-md:h-[180px] flex flex-col justify-between"
        >
          <div>
            {" "}
            <h1 className="text-base font-bold max-w-full truncate">{test.title}</h1>
            <p className="mt-3 text-xs md:text-sm">{test.description}</p>
          </div>

          <div className="flex justify-end items-center">
            <div className="bg-primary mt-4 md:text-xl cursor-pointer rounded-full text-white flex items-center justify-center md:w-11 w-8 h-8 md:h-11">
              <Link
                href={`/dashboard/tests/${getSlug(test.title)}${
                  test.isLocked ? "?locked=true" : ""
                }`}
              >
                {test.isLocked ? (
                  <IoIosLock className="text-white" />
                ) : (
                  <FaArrowRight className="" />
                )}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MappedTests;
