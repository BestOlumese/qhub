import React from "react";

import FormHeading from "@/components/ui/Form/FormHeading";
import Background from "../../components/AccountSetup/Background";
import { redirect } from "next/navigation";
import LMSUserForm from "@/components/LMSUserSetup/LmsUserForm";
const LMSUserSetup = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  if (!searchParams.token || !searchParams.email) {
    redirect("/login");
  }
  return (
    <div className="h-screen  bg-primary-light z-[10] flex items-center justify-center ">
      <Background />
      <div className="bg-white shadow-md p-10 z-[10] rounded-md md:w-[500px] max-md:min-w-[90%] max-[600px]:max-w-xs">
        <FormHeading title="Create Your Account Password" />
        <LMSUserForm token={searchParams?.token as string} />
      </div>
    </div>
  );
};

export default LMSUserSetup;
