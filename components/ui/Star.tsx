import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Star = ({
  starCount,
  className,
}: {
  starCount: number;
  className: string;
}) => {
  const stars = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
  ];
  return (
    <div className="flex w-full gap-3 items-center justify-center">
      {stars.map((star, index) => {
        return (
          <span
            key={index}
            className={`${className} ${
              index < starCount ? "text-yellow" : ""
            } text-yellow`}
          >
            {index < starCount ? star : <FaRegStar />}
          </span>
        );
      })}
    </div>
  );
};

export default Star;
