import React from "react";
import { reviews } from "@/lib/data";
import Star from "@/components/ui/Star";
import { FaAngleDown } from "react-icons/fa";
const CustomerReviews = () => {
  return (
    <div className="mt-12 ">
      <div className="grid-cols-2 grid  gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 border rounded-md border-slate-300">
            <div className="w-fit mb-3">
              <Star starCount={review.rating} className="" />
            </div>
            <h3 className="font-bold my-3">
              {review.name} -{" "}
              <span className="font-normal text-sm">{review.date}</span>
            </h3>
            <p className="text-sm">{review.review}</p>
          </div>
        ))}
      </div>
      <div className="flex w-full mt-12 text-black/60  text-sm justify-center">
        <p className="font-bold   flex items-center cursor-pointer gap-3">
          Show More Reviews <FaAngleDown />
        </p>
      </div>
    </div>
  );
};

export default CustomerReviews;
