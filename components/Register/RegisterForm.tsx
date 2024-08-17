import React from "react";
import { Label } from "../ui/Form/Label";
import { Input } from "../ui/Form/Input";
import LabelInputContainer from "../ui/Form/LabelInputContainer";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Password from "./Password";
const RegisterForm = () => {
  return (
    <form className="mt-10 ">
      <LabelInputContainer className="my-4">
        <Label htmlFor="name">Organization Name</Label>
        <Input
          id="name"
          placeholder="Dax Inc"
          type="text"
          // value={email}
          // onChange={handleEmailChange}
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="linkvault@dax.com"
          type="email"
          // value={email}
          // onChange={handleEmailChange}
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="category">Category</Label>
        <select
          name=""
          id=""
          className="flex outline-none h-10 w-full border-none bg-gray-50  text-black  shadow-input rounded-md px-3 py-2 text-sm  
          
          "
        >
          <option value="">--Select an option--</option>
          <option value="1-10">Technology</option>
          <option value="1-10">Design</option>
          <option value="11-50">Finance</option>
          <option value="51-200">Marketing</option>
          <option value="201-500">Business</option>
        </select>
      </LabelInputContainer>
      <Password />
    </form>
  );
};

export default RegisterForm;
