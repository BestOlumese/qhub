"use client";
import React from "react";
const Button = ({
  text,
  clickFunction,
  type = "button",
}: {
  text: string;
  clickFunction?: () => void;
  type?: "submit" | "button";
}) => {
  return (
    <button
      className="w-full rounded-full text-sm open-sans py-2 md:py-3 bg-primary text-white "
      onClick={() => {
        if (clickFunction) {
          clickFunction();
        }
      }}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
