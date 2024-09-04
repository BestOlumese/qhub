import React from "react";
import { QUESTIONS } from "@/lib/data";
import ellipse from "../../assets/icons/ellipse.svg";
import Image from "next/image";
const TestSidebar = ({
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
    <div className="col-span-2 border-r py-8 max-lg:hidden">
      <h3 className="font-bold px-8">Questions</h3>
      <ul className="mt-2 ">
        {QUESTIONS.map((question, index) => {
          return (
            <li
              key={index}
              className={`flex items-center cursor-pointer gap-2 w-full px-3 text-sm py-3  ${
                index === questionIndex
                  ? "text-primary  bg-primary/10"
                  : "text-black"
              }`}
              onClick={() => handleClick(index)}
            >
              <Image src={ellipse} alt="ellipse" />
              {question.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TestSidebar;
