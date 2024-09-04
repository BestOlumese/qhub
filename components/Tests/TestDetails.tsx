import React from "react";
import TestObjectives from "./TestObjectives";
import OtherTestInfo from "./OtherTestInfo";

const TestDetails = () => {
  return (
    <div className="lg:grid lg:grid-cols-12 my-3 lg:my-6 gap-6 lg:gap-8 flex flex-col">
      <TestObjectives />
      <OtherTestInfo />
    </div>
  );
};

export default TestDetails;
