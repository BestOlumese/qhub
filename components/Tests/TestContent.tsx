import React, { useCallback } from "react";
import { QUESTIONS } from "@/lib/data";

const TestContent = ({
  questionIndex,
  setQuestionIndex,
  setShowSummary,
}: {
  questionIndex: number;
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setShowSummary: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleNextQuestion = useCallback(() => {
    if (questionIndex < QUESTIONS.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  }, [questionIndex, setQuestionIndex]);
  const handlePreviousQuestion = useCallback(() => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  }, [questionIndex, setQuestionIndex]);
  const handleSubmit = useCallback(() => {
    setShowSummary(true);
  }, [setShowSummary]);

  return (
    <div className="p-4 py-6 lg:p-6 w-full col-span-12 lg:col-span-10">
      {/* <p className="text-sm text-primary">Question {questionIndex + 1} of 5</p> */}
      <h1 className="font-bold text-xl mb-2 ">
        {QUESTIONS[questionIndex].heading}
      </h1>
      <ul>
        {QUESTIONS[questionIndex].options.map((option, index) => {
          return (
            <li key={index} className="py-2 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="option"
                  onChange={handleNextQuestion}
                />
                <span>{option}</span>
              </label>
            </li>
          );
        })}
      </ul>
      <div className="mt-6 flex gap-5 max-lg:justify-center">
        <button
          className=" rounded-full p-2 select-none"
          onClick={handlePreviousQuestion}
        >
          Previous
        </button>
        {questionIndex === QUESTIONS.length - 1 ? (
          <button
            className="bg-primary rounded-full w-[150px] p-2 text-white select-none "
            onClick={handleSubmit}
          >
            Submit
          </button>
        ) : (
          <button
            className="bg-primary rounded-full w-[150px] p-2 text-white  select-none"
            onClick={handleNextQuestion}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default TestContent;
