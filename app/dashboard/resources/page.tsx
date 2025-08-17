import AdminResourcesPage from "@/components/AdminResourcesPage";
import EmployeeResourcesPage from "@/components/EmployeeResourcesPage";
import { cookies } from "next/headers";
import React from "react";

const Page = () => {
  const cookieStore = cookies();
      const role = cookieStore.get("role")?.value;
  return (
    <>{role === "organizationOwner" || role === "admin" ? <AdminResourcesPage /> : <EmployeeResourcesPage />}</>
  );
};

export default Page;
