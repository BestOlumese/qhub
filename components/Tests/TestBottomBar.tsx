import React from "react";
import { QUESTIONS } from "@/lib/data";

const TestBottomBar = ({
  questionIndex,
  setQuestionIndex,
}: {
  questionIndex: number;
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleClick = (index: number) => {
    setQuestionIndex(index);
  };
  return (
    <ul className="mt-6 grid grid-cols-3 gap-4 items-center min-[1024px]:hidden ">
      {QUESTIONS.map((question, index) => {
        return (
          <li
            key={index}
            className={`flex items-center rounded-full justify-center gap-2 w-full mr-4 px-3 text-xs sm:text-sm py-3  ${
              index === questionIndex
                ? "text-primary  bg-primary/10"
                : "text-black"
            }`}
            onClick={() => handleClick(index)}
          >
            {question.title}
          </li>
        );
      })}
    </ul>
  );
};

export default TestBottomBar;
