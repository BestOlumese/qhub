"use client";
import React, { useState, useCallback } from "react";
import TestHeader from "./TestHeader";
import TestBody from "./TestBody";
import { QUESTIONS } from "@/lib/data";
import TestSummary from "./TestSummary";
import TestBottomBar from "./TestBottomBar";
const Test = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  return (
    <div className=" h-full ">
      <div className="w-full h-fit border  ">
        <TestHeader questionIndex={activeQuestionIndex} />
        {showSummary ? (
          <TestSummary
            setShowSummary={setShowSummary}
            setQuestionIndex={setActiveQuestionIndex}
          />
        ) : (
          <TestBody
            questionIndex={activeQuestionIndex}
            setQuestionIndex={setActiveQuestionIndex}
            setShowSummary={setShowSummary}
          />
        )}
      </div>
      {!showSummary && (
        <TestBottomBar
          questionIndex={activeQuestionIndex}
          setQuestionIndex={setActiveQuestionIndex}
        />
      )}
    </div>
  );
};

export default Test;
