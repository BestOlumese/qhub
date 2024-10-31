import EmployeeTable from "@/components/Tables/EmployeeTable";

import { notFound } from "next/navigation";

import React from "react";

import InviteEmployeeSheet from "@/components/Admin/InviteEmployeeSheet";

const Page = () => {
  const user = {
    role: "admin",
  };
  const role = user.role;
  if (role !== "admin") return notFound();
  return (
    <div className="p-6">
      <div className="flex max-md:flex-col justify-between">
        <h2 className="font-semibold">Employees</h2>
        <InviteEmployeeSheet />
      </div>
      <EmployeeTable />
    </div>
  );
};

export default Page;
