import FormHeading from "@/components/ui/Form/FormHeading";
import React from "react";
import LoginForm from "../../../components/Login/LoginForm";
import FormFooter from "@/components/ui/Form/FormFooter";
const Login = () => {
  return (
    <div>
      <FormHeading title="Welcome Back" />
      <LoginForm />
      <FormFooter isLogin={true} buttonText="Log In" showExtraText={true} />
    </div>
  );
};

export default Login;
