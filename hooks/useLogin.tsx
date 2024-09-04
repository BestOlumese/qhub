import React, { useRef, useState } from "react";

const useLogin = () => {
  const [error, setError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    
    // Debugging ref values
    console.log('Email Ref:', emailRef.current?.value);
    console.log('Password Ref:', passwordRef.current?.value);
  
    if (
      emailRef.current?.value &&
      passwordRef.current?.value
    ) {
      window.location.href = "/dashboard";
    } else {
      setError("Please fill in all fields");
    }
  };
  
  return { error, emailRef, passwordRef, handleSubmit };
};

export default useLogin;
