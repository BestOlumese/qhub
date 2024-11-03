import AdminResourcesPage from "@/components/AdminResourcesPage";
import EmployeeResourcesPage from "@/components/EmployeeResourcesPage";
import React from "react";

const Page = () => {
  const user = {
    role: "employee",
  };
  const role = user.role;
  return (
    <>{role === "admin" ? <AdminResourcesPage /> : <EmployeeResourcesPage />}</>
  );
};

export default Page;
