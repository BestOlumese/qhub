"use client";
import React, { useState } from "react";
import useVerifyForm from "@/hooks/useVerifyForm";
import FormFooter from "../ui/Form/FormFooter";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@apollo/client";
import { VERIFY_USER } from "@/lib/graphql";
const VerifyForm = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("user");
  const router = useRouter();
  if (!userId) {
    router.push("/register");
  }
  const {
    code,

    handleChange,
    handleKeyDown,
    handlePaste,
    handleRef,
  } = useVerifyForm();
  const [verifyUser, { loading }] = useMutation(VERIFY_USER);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (code.includes("")) {
      setError("Please fill in all fields");
      return;
    }
    setError("");

    try {
      const { data } = await verifyUser({
        variables: {
          input: {
            otp: code.join(""),
            userId,
          },
        },
      });
      toast.success("Verified successfully");

      router.push(`/verified`);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong.");
    }
  };
  return (
    <form className="mt-5" onSubmit={handleSubmit}>
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
            autoComplete="none"
            className="w-10 h-10 text-center text-2xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      <div className="mt-4">
        <FormFooter
          loading={loading}
          error={error}
          showExtraText={false}
          buttonText="Verify Email"
        />
      </div>
    </form>
  );
};

export default VerifyForm;
