"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import FormHeading from "@/components/ui/Form/FormHeading";
import RegisterForm from "@/components/Register/RegisterForm";
import FormFooter from "@/components/ui/Form/FormFooter";

const Register = () => {
  const [error, setError] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const category = categoryRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (!name || !email || !category || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Reset error if validation passes
    setError(null);

    // If registration is successful:
    router.push("/verify-email");
  };

  return (
    <form className="w-full" onSubmit={handleRegister}>
      <FormHeading title="Register an Organization" />
      <RegisterForm
        nameRef={nameRef}
        emailRef={emailRef}
        categoryRef={categoryRef}
        passwordRef={passwordRef}
        confirmPasswordRef={confirmPasswordRef}
      />
      <FormFooter
        error={error}
        buttonText="Sign Up"
        isSignUp={true}
        showExtraText={true}
      />
    </form>
  );
};

export default Register;
