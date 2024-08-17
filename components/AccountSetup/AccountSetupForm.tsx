"use client";
import React from "react";
import FirstSetup from "./FirstSetup";
import SecondSetup from "./SecondSetup";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import useAccountSetupForm from "@/hooks/useAccountSetupForm";
const AccountSetupForm = () => {
  const { showSecondSetup, handleNext, handlePrevious } = useAccountSetupForm();
  return (
    <form action="" className="mt-10">
      {showSecondSetup ? <SecondSetup /> : <FirstSetup />}
      <div
        className={`flex text-sm items-center ${
          showSecondSetup ? "justify-between" : "justify-end"
        }`}
      >
        {showSecondSetup ? (
          <>
            {" "}
            <button
              className="flex items-center gap-2 bg-primary rounded-md text-white p-2 px-6 mt-4"
              onClick={handlePrevious}
            >
              <FaArrowLeft /> Go back
            </button>
            <button
              className="flex items-center gap-2 bg-primary rounded-md text-white p-2 px-6 mt-4"
              onClick={handleNext}
            >
              Submit <FaArrowRight />
            </button>
          </>
        ) : (
          <button
            className="flex items-center gap-2 bg-primary rounded-md text-white p-2 px-6 mt-4"
            onClick={handleNext}
          >
            Next <FaArrowRight />
          </button>
        )}
      </div>
    </form>
  );
};

export default AccountSetupForm;
