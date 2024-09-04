import React from "react";
import LabelInputContainer from "@/components/ui/Form/LabelInputContainer";
import { Label } from "@/components/ui/Form/Label";
import { Input } from "@/components/ui/Form/Input";
import Password from "@/components/Register/Password";

type LoginFormProps = {
  emailRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;
};

const LoginForm: React.FC<LoginFormProps> = ({ emailRef, passwordRef }) => {
  return (
    <div className="mt-10">
      <LabelInputContainer className="my-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="linkvault@dax.com"
          type="email"
          ref={emailRef}
          autoComplete="email"
        />
      </LabelInputContainer>
      <Password
        label="Password"
        ref={passwordRef}
      />
    </div>
  );
};

export default LoginForm;
