"use client"
import React, { useState } from "react";

const useAccountSetupForm = () => {
  const [showSecondSetup, setShowSecondSetup] = useState(false);

  const handleNext = (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setShowSecondSetup(true);
  };

  const handlePrevious = (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setShowSecondSetup(false);
  };
  return { showSecondSetup, handleNext, handlePrevious };
};

export default useAccountSetupForm;
