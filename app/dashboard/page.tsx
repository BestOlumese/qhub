import AdminHome from "@/components/Admin/AdminHome";
import React from "react";
import EmployeeHome from "@/components/EmployeeHome";
const Page = () => {
  const user = {
    role: "admin",
  };
  const role = user.role;
  return (
    <div className="w-full h-full p-6">
      {role === "admin" && <AdminHome />}
      {role === "employee" && <EmployeeHome />}
    </div>
  );
};

export default Page;
