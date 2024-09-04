import React from "react";
import share from "../../assets/icons/share.svg";
import refresh from "../../assets/icons/refresh.svg";
import Image from "next/image";
const TestSummary = ({
  setShowSummary,
  setQuestionIndex,
}: {
  setShowSummary: React.Dispatch<React.SetStateAction<boolean>>;
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleRetakeTest = () => {
    setShowSummary(false);
    setQuestionIndex(0);
  };
  return (
    <div className="flex flex-col items-center h-full row-span-9 p-4 lg:p-6 w-full">
      <h1 className="text-green-500 text-3xl lg:text-5xl">85%</h1>
      <p className="my-3">You are Excellent, DAX</p>
      <div className="rounded-xl border w-full lg:w-[40%] p-4">
        <p className="w-full flex justify-between items-center my-2">
          {" "}
          Total Questions <span>5</span>
        </p>
        <p className="w-full flex justify-between items-center my-2">
          {" "}
          Correct Answers <span>3</span>
        </p>
        <p className="w-full flex justify-between items-center my-2">
          {" "}
          Incorrect answers <span>2</span>
        </p>
        <button className="w-full rounded-full text-white mt-6 px-5 bg-primary p-2 flex justify-between items-center">
          Share <Image src={share} alt="Share" />
        </button>
      </div>
      <button
        className="text-primary flex gap-4 items-center  mt-6"
        onClick={handleRetakeTest}
      >
        <Image src={refresh} alt="refresh" /> Retake Test
      </button>
    </div>
  );
};

export default TestSummary;
