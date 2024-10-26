"use client";
import { v4 as uuidv4 } from "uuid";

import React, { useState } from "react";
import { Quiz } from "@/lib/types";
import Step2QuizQuestion from "./Step2QuizQuestion";
import Step1QuizInfo from "./Step1QuizInfo";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { Module } from "@/lib/types";
const QuizBuilder = ({
  module,
  setModules,
  propQuiz,
}: {
  module: Module;
  setModules: React.Dispatch<React.SetStateAction<Module[]>>;
  propQuiz?: Quiz;
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const defaultQuiz = {
    id: uuidv4(),
    name: "",
    summary: "",
    questions: [],
  };
  const [quizPageNo, setQuizPageNo] = useState(2);
  const [quiz, setQuiz] = useState<Quiz>(propQuiz || defaultQuiz);
  const handleSubmit = () => {
    if (propQuiz) {
      setModules((prev) =>
        prev.map((prevModule) =>
          prevModule.id === module.id
            ? {
                ...module,
                quizzes: prevModule.quizzes?.map((q) =>
                  q.id === quiz.id ? quiz : q
                ),
              }
            : module
        )
      );
    } else {
      setModules((prev) =>
        prev.map((prevModule) =>
          prevModule.id === module.id
            ? { ...module, quizzes: [...module.quizzes!, quiz] }
            : module
        )
      );
    }
  };
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setQuiz((prev) => ({ ...prev, [id]: value }));
  };

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePrevStep = () => setCurrentStep((prev) => prev - 1);
  const steps = [
    { label: "Quiz Info" },
    { label: "Questions" },
    { label: "Settings" },
  ];
  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };
  const handleNextQuizPage = () => setQuizPageNo((prev) => prev + 1);
  const handlePrevQuizPage = () => setQuizPageNo((prev) => prev - 1);
  console.log(quiz, "quiz");
  return (
    <>
      <div className="flex gap-4 items-center my-4">
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => handleStepClick(index + 1)}
            className={`flex items-center gap-2 text-sm cursor-pointer ${
              index + 1 < currentStep ? "text-primary" : "text-gray-500"
            }`}
          >
            {index + 1 < currentStep ? (
              <IconCircleCheckFilled className="w-5 h-5 text-primary" />
            ) : (
              <span
                className={`w-5 h-5 flex items-center justify-center rounded-full ${
                  index + 1 === currentStep
                    ? "bg-primary text-white"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </span>
            )}
            <span
              className={`${
                index + 1 <= currentStep ? "font-semibold" : "font-normal"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
      {currentStep == 1 && (
        <Step1QuizInfo
          onNext={handleNextStep}
          onChange={handleChange}
          quiz={quiz}
        />
      )}
      {currentStep == 2 && (
        <Step2QuizQuestion
          onSubmit={handleSubmit}
          isEditQuiz={!!propQuiz}
          quizPageNo={quizPageNo}
          quiz={quiz}
          setQuiz={setQuiz}
          handleNextQuizPage={handleNextQuizPage}
          handlePrevQuizPage={handlePrevQuizPage}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
    </>
  );
};

export default QuizBuilder;
