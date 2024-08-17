import FormHeading from "@/components/ui/Form/FormHeading";
import React from "react";
import FormBody from "./FormBody";

const SubmitReview = () => {
  return (
    <div className="bg-primary-light/50 p-8 mt-16">
      <FormHeading title="Submit A Review" />
      <FormBody />
    </div>
  );
};

export default SubmitReview;
