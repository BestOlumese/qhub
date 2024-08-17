import Link from "next/link";
import React from "react";
import Button from "../Button";
const FormFooter = ({
  buttonText,
  showExtraText,
  isSignUp,
  isLogin,
}: {
  buttonText: string;
  showExtraText: boolean;
  isSignUp?: boolean;
  isLogin?: boolean;
}) => {
  return (
    <div className="space-y-4">
      <div className="my-4 w-full">
        <Button text={buttonText} />
      </div>
      {showExtraText && (
        <p className="text-sm text-center">
          {isSignUp ? (
            <span>
              Already have an account?{" "}
              <Link href="/login" className="text-primary">
                Login in
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
