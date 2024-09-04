"use client";
import React, { useState } from "react";
import { Label } from "../ui/Form/Label";
import { Input } from "../ui/Form/Input";
import LabelInputContainer from "../ui/Form/LabelInputContainer";
import Password from "./Password";

type RegisterFormProps = {
  nameRef: React.RefObject<HTMLInputElement>;
  emailRef: React.RefObject<HTMLInputElement>;
  categoryRef: React.RefObject<HTMLSelectElement>;
  passwordRef: React.RefObject<HTMLInputElement>;
  confirmPasswordRef: React.RefObject<HTMLInputElement>;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  nameRef,
  emailRef,
  categoryRef,
  passwordRef,
  confirmPasswordRef,
}) => {
  return (
    <div className="mt-4 2xl:mt-10 ">
      <LabelInputContainer className="my-4">
        <Label htmlFor="name">Organization Name</Label>
        <Input id="name" placeholder="Dax Inc" type="text" ref={nameRef} />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="linkvault@dax.com"
          type="email"
          ref={emailRef}
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="category">Category</Label>
        <select
          id="category"
          className="flex outline-none h-10 w-full border-none bg-gray-50 text-black shadow-input rounded-md px-3 py-2 text-sm"
          ref={categoryRef}
        >
          <option value="">--Select an option--</option>
          <option value="Technology">Technology</option>
          <option value="Design">Design</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="Business">Business</option>
        </select>
      </LabelInputContainer>
      <Password label="Password" ref={passwordRef} />
      <Password label="Confirm Password" ref={confirmPasswordRef} />
    </div>
  );
};

export default RegisterForm;
