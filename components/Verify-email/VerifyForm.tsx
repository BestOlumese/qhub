"use client"
import React from "react";
import useVerifyForm from "@/hooks/useVerifyForm";

const VerifyForm: React.FC = () => {
  const {
    code,
    inputRefs,
    handleChange,
    handleKeyDown,
    handlePaste,
    handleRef,
  } = useVerifyForm();

  return (
    <div className="my-5">
      <div className="space-x-2 flex justify-center items-center">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => handleRef(el, index)}
            onPaste={handlePaste}
            className="w-10 h-10 text-center text-2xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
    </div>
  );
};

export default VerifyForm;
