import FormHeading from "@/components/ui/Form/FormHeading";
import RegisterForm from "@/components/Register/RegisterForm";
import React from "react";
import FormFooter from "@/components/ui/Form/FormFooter";

const Register = () => {
  return (
    <div className="w-[450px]">
      <FormHeading title="Register an Organization" />
      <RegisterForm />
      <FormFooter buttonText="Sign Up" isSignUp={true} showExtraText={true} />
    </div>
  );
};

export default Register;
