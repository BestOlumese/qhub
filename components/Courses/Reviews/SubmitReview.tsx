import React from "react";
import FormBody from "./FormBody";

const SubmitReview = () => {
  return (
    <div className="bg-primary-light/50 p-4 xl:p-6 mt-4 xl:mt-16 xl:w-[80%] rounded-sm w-full">
      <h1 className="text-black kumbh-sans text-xl font-semibold text-center xl:mb-2">
        Submit A Review
      </h1>
      <FormBody />
    </div>
  );
};

export default SubmitReview;
