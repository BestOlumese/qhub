import React from "react";

import FormHeading from "@/components/ui/Form/FormHeading";
import AccountSetupForm from "../../components/AccountSetup/AccountSetupForm";
import Background from "../../components/AccountSetup/Background";
const AccountSetup = () => {
  return (
    <div className="h-screen  bg-primary-light z-[10] flex items-center justify-center ">
      <Background />
      <div className="bg-white shadow-md p-10 z-[10] rounded-md w-[500px]">
        <FormHeading title="Set Up Your Account" />
        <AccountSetupForm />
      </div>
    </div>
  );
};

export default AccountSetup;
