import Main from "@/components/Dashboard/Main/Main";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import React from "react";

const Dashboard: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="grid grid-cols-12 open-sans overflow-clip h-screen ">
      <Sidebar />
      <Main>{children}</Main>
    </div>
  );
};

export default Dashboard;
