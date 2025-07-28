"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../ui/button";
import QuestionBoard from "./QuestionBoard";
import Page1QuizQuestion from "./Page1QuizQuestion";
import { Quiz } from "@/lib/types";

const Step2QuizQuestion = ({
  handleNextStep,
  handlePrevStep,
  isEditQuiz,
  quiz,
  setQuiz,
  onSubmit,
  handleNextQuizPage,
  handlePrevQuizPage,
  quizPageNo,
}: {
  handleNextStep: () => void;
  handlePrevStep: () => void;
  isEditQuiz: boolean;
  quiz: Quiz;
  onSubmit: () => void;
  handleNextQuizPage: () => void;
  handlePrevQuizPage: () => void;
  quizPageNo: number;
  setQuiz: React.Dispatch<React.SetStateAction<Quiz>>;
}) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const questions = quiz.questions;
  const activeQuestionIndex = editIndex || 0;
  const activeQuestion = questions[activeQuestionIndex];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.map((prevQ, idx) =>
        idx === activeQuestionIndex
          ? {
              ...prevQ,
              [id]: value,
            }
          : prevQ
      ),
    }));
  };
  const handleReactQuillChange = (value: string) => {
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.map((prevQ, idx) =>
        idx === activeQuestionIndex
          ? {
              ...prevQ,
              description: value,
            }
          : prevQ
      ),
    }));
  };

  const handleAnswerExplanationChange = (value: string) => {
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.map((prevQ, idx) =>
        idx === activeQuestionIndex
          ? {
              ...prevQ,
              answerExplanation: value,
            }
          : prevQ
      ),
    }));
  };

  const handleQuestionTypeChange = (value: string) => {
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.map((prevQuestion, idx) =>
        idx === activeQuestionIndex
          ? {
              ...prevQuestion,
              questionType: value,
              options: [{ id: uuidv4(), name: "", isCorrect: false }],
            }
          : prevQuestion
      ),
    }));
  };
  const handleAddOption = () => {
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.map((prevQuestion) => ({
        ...prevQuestion,
        options: [
          ...prevQuestion.options,
          { id: uuidv4(), name: "", isCorrect: false },
        ],
      })),
    }));
  };
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.map((prevQuestion) => ({
        ...prevQuestion,
        options: prevQuestion.options.map((prevOption) =>
          prevOption.id === id ? { ...prevOption, name: value } : prevOption
        ),
      })),
    }));
  };
  const handleEditQuestion = (index: number) => {
    handlePrevQuizPage();
    setEditIndex(index);
  };
  const handleDeleteQuestion = (index: number) => {
    const newQuestions = questions.filter((_, idx) => idx !== index);
    setQuiz((prev) => ({ ...prev, questions: newQuestions }));
  };

  const handleAddNewQuestion = () => {
    handlePrevQuizPage();

    const newQuestions = [
      ...questions,
      {
        id: uuidv4(),
        question: "",
        questionType: "true/false",
        points: 1,
        description: "",
        options: [{ id: uuidv4(), name: "", isCorrect: false }],
        answerExplanation: "",
      },
    ];
    setEditIndex(quiz.questions.length);
    setQuiz((prev) => ({ ...prev, questions: newQuestions }));
  };

  return (
    <>
      {quizPageNo === 1 && (
        <Page1QuizQuestion
          onNext={handleNextQuizPage}
          onBack={handlePrevStep}
          handleChange={handleChange}
          handleQuestionTypeChange={handleQuestionTypeChange}
          handleReactQuillChange={handleReactQuillChange}
          handleAddOption={handleAddOption}
          handleOptionChange={handleOptionChange}
          question={activeQuestion}
          isEditing={editIndex !== null}
          handleAnswerExplanationChange={handleAnswerExplanationChange}
          setQuiz={setQuiz}
        />
      )}
      {quizPageNo === 2 && (
        <>
          <QuestionBoard
            onDelete={handleDeleteQuestion}
            questions={questions}
            onEdit={handleEditQuestion}
            onAdd={handleAddNewQuestion}
          />
          <div className="flex justify-between w-full flex-row mt-4 ">
            <Button variant="outline" onClick={handlePrevQuizPage}>
              Back
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90"
              onClick={() => {
                onSubmit();
                if (!isEditQuiz) handleNextStep();
              }}
            >
              {isEditQuiz ? "Update Quiz" : "Save & Next"}
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Step2QuizQuestion;
