"use client";
import FormHeading from "@/components/ui/Form/FormHeading";
import React, { Suspense } from "react";
import VerifyForm from "../../../components/Verify-email/VerifyForm";
import { useRouter, useSearchParams } from "next/navigation";

const VerifyEmail = () => {
  return (
    <div>
      <FormHeading title="Verify Your Email" />
      <p className="max-w-[280px] mx-auto sm:max-w-xs my-4 text-center max-sm:text-sm">
        Please check your email for a 6 digits code and enter the code in the
        box below
      </p>
      <Suspense fallback={<p>Loading...</p>}>
        <VerifyForm />
      </Suspense>
    </div>
  );
};

export default VerifyEmail;
