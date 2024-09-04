"use client";
import React, { useState, useRef } from "react";

const useVerifyForm = () => {
  const [code, setCode] = useState(new Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleRef = (el: HTMLInputElement | null, index: number) => {
    if (el) {
      inputRefs.current[index] = el;
    }
  }; 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/, "");
    if (value.length > 1) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && !code[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData.getData("text").slice(0, 6).split("");
    setCode(paste.concat(new Array(6 - paste.length).fill("")));
    paste.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].focus();
      }
    });
  };
  return {
    code,
    inputRefs,
    handleChange,
    handleKeyDown,
    handlePaste,
    handleRef,
  };
};

export default useVerifyForm;
