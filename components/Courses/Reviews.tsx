import React from "react";
import StarCount from "./Reviews/StarCount";
import CustomerRating from "./Reviews/CustomerRating";
import SubmitReview from "./Reviews/SubmitReview";
import CustomerReviews from "./Reviews/CustomerReviews";

const Reviews = () => {
  return (
    <div className="xl:mt-8 flex flex-col items-center">
      <div className="xl:grid xl:grid-cols-12 w-full xl:gap-10 flex items-center justify-center flex-col">
        <StarCount />
        <CustomerRating />
      </div>
      <SubmitReview />
      <CustomerReviews/>
    </div>
  );
};

export default Reviews;
