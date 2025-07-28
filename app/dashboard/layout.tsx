import Bottombar from "@/components/Main/Bottombar";
import Header from "@/components/Main/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex  max-h-screen overflow-hidden">
      <div className="max-md:hidden">
      <Sidebar />
      </div>
      <div className="flex-1 max-h-screen overflow-y-auto h-full ">
        <Header />
        {children}
        {/* <Bottombar /> */}
      </div>
    </div>
  );
};

export default Dashboard;
