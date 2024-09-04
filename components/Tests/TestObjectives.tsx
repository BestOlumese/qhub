"use client";
import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { IoIosLock } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
const TestObjectives = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isLocked = searchParams.get("locked");
  const handleStartTest = () => {
    if (isLocked) {
      alert("This test is locked");
      return;
    }
    router.push(pathname + "/start-test");
  };
  return (
    <div className="col-span-7 border border-gray-500/20 rounded-xl ">
      <div className="p-4 md:p-6 border-b-gray/20 border-b">
        <h1 className="sm:text-xl font-bold ">Customer Service Excellence</h1>
        <h3 className="flex gap-2 items-center my-2 mt-4 text-sm">
          <span className="font-bold">Prerequisite Course: </span>
          Fundamentals of Customer Service in Banking
          {/* <span className="bg-green-500 text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
            <FaCheck />
          </span> */}
        </h3>
        <h3 className=" text-sm">
          {" "}
          <span className="font-bold">Question Type:</span> Multiple Choice
        </h3>
        <h3 className="my-2 text-sm">
          {" "}
          <span className="font-bold">Number of Questions:</span> 50
        </h3>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-sm">Objectives</h3>
        <p className="text-sm  mt-3 text-gray-500">
          Evaluate the employee&apos;s understanding of customer service
          principles and their ability to apply them in a banking context.
        </p>
        <h3 className="font-bold mt-4 text-sm">Requirements</h3>
        <ul className="list-disc list-inside mt-4 text-sm">
          <li>
            You should be currently taking or have completed this course to be
            able to understand and answer the questions correctly.
          </li>
          <li>
            You should be currently taking or have completed this course to be
            able to understand and answer the questions correctly.
          </li>
        </ul>
        <button
          onClick={handleStartTest}
          className="flex items-center w-[250px] bg-primary rounded-full text-white p-3 mt-6 px-5 justify-between "
        >
          Start Test {isLocked ? <IoIosLock /> : <FaArrowRight />}
        </button>
      </div>
    </div>
  );
};

export default TestObjectives;
