"use client";
import Button from "@/components/Button";
import React from "react";
import { FaCheck } from "react-icons/fa";

const Verified = () => {
  const handleStart = () => {
    window.location.href = "/account-setup";
  };
  return (
    <div className="flex items-center flex-col">
      <div className="bg-primary p-3 md:p-6 w-fit rounded-full">
        <FaCheck className="text-3xl md:text-6xl text-white" />
      </div>
      <h1 className="text-2xl font-semibold mt-4">Email Verified</h1>
      <p className="max-w-[280px] mx-auto sm:max-w-xs my-4 text-center max-sm:text-sm">
        Your email has been verified. Let&apos;s get your account set up.
      </p>
      <Button text="Get Started" clickFunction={handleStart} />
    </div>
  );
};

export default Verified;
