import React from "react";
import StarCount from "./Reviews/StarCount";
import CustomerRating from "./Reviews/CustomerRating";
import SubmitReview from "./Reviews/SubmitReview";
import CustomerReviews from "./Reviews/CustomerReviews";

const Reviews = () => {
  return (
    <div className="mt-8 ">
      <div className="grid grid-cols-12 w-full gap-10">
        <StarCount />
        <CustomerRating />
      </div>
      <SubmitReview />
      <CustomerReviews/>
    </div>
  );
};

export default Reviews;
