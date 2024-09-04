import React from "react";
import TestSidebar from "./TestSidebar";
import TestContent from "./TestContent";

const TestBody = ({
  questionIndex,
  setQuestionIndex,
  setShowSummary,
}: {
  questionIndex: number;
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setShowSummary: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="grid grid-cols-12 h-fit">
      <TestSidebar questionIndex={questionIndex} setQuestionIndex={setQuestionIndex}/>
      <TestContent
        questionIndex={questionIndex}
        setQuestionIndex={setQuestionIndex}
        setShowSummary={setShowSummary}
      />
    </div>
  );
};

export default TestBody;
