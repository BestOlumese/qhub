"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../../ActionButton";
const FormFooter = ({
  buttonText,
  showExtraText,
  isSignUp,
  loading,
  error,
}: {
  buttonText: string;
  showExtraText: boolean;
  isSignUp?: boolean;
  loading?: boolean;
  error: string | null;
}) => {
  return (
    <div className="space-y-4">
      <div className="my-4 w-full flex items-center flex-col">
        <Button text={buttonText} loading={loading} type="submit" />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
      {showExtraText && (
        <p className="text-xs text-center">
          {isSignUp ? (
            <span>
              Already have an account?{" "}
              <Link href="/login" className="text-primary">
                Log in
              </Link>
            </span>
          ) : (
            <span>
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-primary">
                Sign up
              </Link>
            </span>
          )}
        </p>
      )}
    </div>
  );
};

export default FormFooter;
