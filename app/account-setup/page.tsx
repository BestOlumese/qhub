import React from "react";

import FormHeading from "@/components/ui/Form/FormHeading";
import AccountSetupForm from "../../components/AccountSetup/AccountSetupForm";
import Background from "../../components/AccountSetup/Background";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
const AccountSetup = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const cookieStore = cookies();
  const email = cookieStore.get("email")?.value;
  console.log(email);

  if (!searchParams.user && !email) {
    redirect("/login");
  }
  return (
    <div className="h-screen  bg-primary-light z-[10] flex items-center justify-center ">
      <Background />
      <div className="bg-white shadow-md p-10 z-[10] rounded-md md:w-[500px] max-md:min-w-[90%] max-[600px]:max-w-xs">
        <FormHeading title="Set Up Your Account" />
        <AccountSetupForm email={email!} />
      </div>
    </div>
  );
};

export default AccountSetup;
