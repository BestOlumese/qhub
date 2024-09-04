"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation"; // Assuming you're using Next.js 13+
import FormHeading from "@/components/ui/Form/FormHeading";
import LoginForm from "../../../components/Login/LoginForm";
import FormFooter from "@/components/ui/Form/FormFooter";

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Reset error if both fields are filled
    setError(null);

  
    // If login is successful:
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleLogin} className="w-full">
      <FormHeading title="Welcome Back" />
      <LoginForm emailRef={emailRef} passwordRef={passwordRef} />
      <FormFooter buttonText="Log In" error={error} showExtraText={true} />
    </form>
  );
};

export default Login;
