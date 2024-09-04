"use client";
import React, { forwardRef, useState } from "react";
import { Label } from "../ui/Form/Label";
import { Input } from "../ui/Form/Input";
import LabelInputContainer from "../ui/Form/LabelInputContainer";
import { FaEyeSlash, FaEye } from "react-icons/fa";
type PasswordProps = {
  label: string;
};

const Password = forwardRef<HTMLInputElement, PasswordProps>(({ label }, ref) => {
  console.log(ref);
  Password.displayName = "Password";
  const [showPassword, setShowPassword] = useState(false);
  return (
    <LabelInputContainer className="mb-4">
      <Label htmlFor="password">{label}</Label>
      <div className="relative">
        <Input
          id="password"
          placeholder="********"
          type={showPassword ? "text" : "password"}
          ref={ref}
        />
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
    </LabelInputContainer>
  );
});

export default Password;
