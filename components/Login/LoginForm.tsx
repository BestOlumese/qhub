import React from "react";
import LabelInputContainer from "@/components/ui/Form/LabelInputContainer";
import { Label } from "@/components/ui/Form/Label";
import { Input } from "@/components/ui/Form/Input";
import Password from "@/components/Register/Password";
const LoginForm = () => {
  return (
    <form className="mt-10">
      <LabelInputContainer className="my-4">
        <Label htmlFor="name">Email Address</Label>
        <Input
          id="email"
          placeholder="linkvault@dax.com"
          type="email"
          // value={email}
          // onChange={handleEmailChange}
        />
      </LabelInputContainer>
      <Password />
    </form>
  );
};

export default LoginForm;
