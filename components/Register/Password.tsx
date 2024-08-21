"use client";
import React from "react";
import { Label } from "../ui/Form/Label";
import { Input } from "../ui/Form/Input";
import LabelInputContainer from "../ui/Form/LabelInputContainer";
import { FaEyeSlash, FaEye } from "react-icons/fa";
const Password = ({
  onChange,
  value,
  label
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <LabelInputContainer className="mb-4">
      <Label htmlFor="password">{label}</Label>
      <div className="relative">
        <Input
          id="password"
          placeholder="********"
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
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
};

export default Password;
