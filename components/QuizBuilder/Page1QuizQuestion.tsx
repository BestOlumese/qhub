"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import { Question } from "@/lib/types";
import MultiChoiceOption from "./MultiChoiceOption";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { questionTypes } from "@/lib/adminData";
import { Switch } from "@/components/ui/switch";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Option } from "@/lib/types";
import ShortAnswerOption from "./ShortAnswerOption";
const Page1QuizQuestion = ({
  onNext,
  onBack,
  handleChange,
  handleQuestionTypeChange,
  handleReactQuillChange,
  handleAddOption,
  handleOptionChange,
  question,
  handleAnswerExplanationChange,
  isEditing,
}: {
  onNext: () => void;
  isEditing: boolean;
  onBack: () => void;
  handleAddOption: () => void;
  handleAnswerExplanationChange: (value: string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleQuestionTypeChange: (value: string) => void;
  handleReactQuillChange: (value: string) => void;
  question: Question;
  handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  console.log(questionTypes, "questionTypes");
  return (
    <div>
      <div className="grid gap-2">
        <Label htmlFor="question">Type your question here</Label>
        <Input
          id="question"
          className="col-span-3"
          onChange={handleChange}
          value={question.question}
        />
      </div>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="category">Select your question type</Label>
        <Select
          onValueChange={handleQuestionTypeChange}
          value={question.questionType}
        >
          <SelectTrigger className="w-full h-14">
            <SelectValue
              placeholder={
                <div className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-md flex items-center justify-center ${questionTypes[0].color} text-white`}
                  >
                    {questionTypes[0].icon}
                  </div>
                  <p>{questionTypes[0].type}</p>
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent className="grid grid-cols-2 gap-2">
            {questionTypes.map((questionType, index) => (
              <SelectItem value={questionType.value} key={index} hideTick>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-md flex items-center justify-center ${questionType.color} text-white`}
                  >
                    {questionType.icon}
                  </div>
                  <p>{questionType.type}</p>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="question-point">Point for the question</Label>
        <div className="flex items-center gap-4">
          <Input
            id="points"
            className="w-[50%]"
            type="number"
            onChange={handleChange}
            value={question.points}
          />
          <div className="flex gap-3 items-center">
            <Switch />
            <Label htmlFor="display-points">Display Points</Label>
          </div>
        </div>
      </div>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="description">Question Description (Optional)</Label>
        <ReactQuill
          theme="snow"
          value={question.description}
          onChange={handleReactQuillChange}
          className="rounded-md shadow-sm"
          style={{
            resize: "vertical",
            minHeight: "150px",
            height: "150px",
            maxHeight: "200px",
            overflowY: "auto",
          }}
        />
      </div>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="options">
          {question.questionType === "short-answer"
            ? "Short Answer"
            : "Question Options (Select the correct option)"}
        </Label>

        {question.questionType === "true/false" ? (
          <div className="bg-gray-200 rounded-md p-4">
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2 bg-white p-4 rounded-md">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">True</Label>
              </div>
              <div className="flex items-center space-x-2 bg-white p-4 rounded-md">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">False</Label>
              </div>
            </RadioGroup>
          </div>
        ) : (
          <>
            {question.options.length > 0 && (
              <>
                {question.questionType === "multiple-choice" && (
                  <MultiChoiceOption
                    onChange={handleOptionChange}
                    options={question.options}
                    handleAddOption={handleAddOption}
                  />
                )}
                {question.questionType === "short-answer" && (
                  <ShortAnswerOption
                    option={question.options[0]}
                    onChange={handleOptionChange}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="lessonContent">Answer Explanation</Label>
        <ReactQuill
          theme="snow"
          value={question.answerExplanation}
          onChange={handleAnswerExplanationChange}
          id="answerExplanation"
          className="rounded-md shadow-sm"
          style={{
            resize: "vertical",
            minHeight: "150px",
            height: "150px",
            maxHeight: "200px",
            overflowY: "auto",
          }}
        />
      </div>
      <div className="flex justify-between w-full flex-row mt-4 ">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          className="bg-primary hover:bg-primary/90"
          type="submit"
          onClick={onNext}
        >
          {isEditing ? "Update Question" : " Add to Questions"}
        </Button>
      </div>
    </div>
  );
};

export default Page1QuizQuestion;
