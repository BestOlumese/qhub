"use client";
import React from "react";

const Button = ({
  text,
  clickFunction,
}: {
  text: string;
  clickFunction?: () => void;
}) => {
  return (
    <button
      className="w-full rounded-full text-sm open-sans py-3 bg-primary text-white "
      onClick={() => {
        if (clickFunction) {
          clickFunction();
        }
      }}
    >
      {text}
    </button>
  );
};

export default Button;
