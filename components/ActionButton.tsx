"use client";
import React from "react";
import { LuLoaderCircle } from "react-icons/lu";
export const Button = ({
  text,
  clickFunction,
  type = "button",
  loading
}: {
  text: string;
  clickFunction?: () => void;
  type?: "submit" | "button";
  loading?: boolean
}) => {
  return (
    <button
      className="w-full rounded-full text-sm open-sans py-2 md:py-3 bg-primary text-white flex justify-center items-center"
      onClick={() => {
        if (clickFunction) {
          clickFunction();
        }
      }}
      type={type}
    >
      {loading && <LuLoaderCircle className="animate-spin w-4 h-4 mr-2" />}
      {text}
    </button>
  );
};