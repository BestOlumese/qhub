import FormHeading from "@/components/ui/Form/FormHeading";

import React from "react";
import VerifyForm from "../../../components/Verify-email/VerifyForm";
import FormFooter from "@/components/ui/Form/FormFooter";

const page = () => {
  return (
    <div>
      <FormHeading title="Verify Your Email" />
      <p className="max-w-xs my-4 text-center">
        Please check your email for a 6 digits code and enter the code in the
        box below
      </p>
      <VerifyForm />
      <FormFooter showExtraText={false} buttonText="Verify Email" />
    </div>
  );
};

export default page;
