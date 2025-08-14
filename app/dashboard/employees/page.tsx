import EmployeeTable from "@/components/Tables/EmployeeTable";

import { notFound } from "next/navigation";

import React from "react";

import InviteEmployeeSheet from "@/components/Admin/InviteEmployeeSheet";
import { cookies } from "next/headers";

const Page = () => {
  const cookieStore = cookies();
  const role = cookieStore.get("role")?.value;
  const organizationId = cookieStore.get("organizationId")?.value;
  if (role !== "organizationOwner") return notFound();

  return (
    <div className="p-6">
      <div className="flex max-md:flex-col justify-between">
        <h2 className="font-semibold">Employees</h2>
        <InviteEmployeeSheet />
      </div>
      <EmployeeTable organizationId={organizationId as string} />
    </div>
  );
};

export default Page;
