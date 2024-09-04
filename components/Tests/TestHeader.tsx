import React from "react";
import ProgressBar from "../ui/ProgressBar";
import { IoMdTrophy } from "react-icons/io";

const TestHeader = ({ questionIndex }: { questionIndex: number }) => {
  return (
    <div className="bg-primary text-white w-full p-4 h-fit place-content-center">
      <h1 className=" text-2xl mb-2 font-semibold">
        Customer Service Excellence
      </h1>
      <div className=" my-2 flex gap-2 items-center">
        <ProgressBar value={questionIndex + 1} max={5} />
        <IoMdTrophy className="text-3xl text-yellow" />
      </div>
      <p className="text-xs">{questionIndex + 1} of 5 answered</p>
    </div>
  );
};

export default TestHeader;
