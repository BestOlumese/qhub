
import Main from "@/components/Dashboard/Main/Main";

import React from "react";

const Dashboard: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className=" open-sans  h-screen flex ">
      <Main>{children}</Main>
      
    </div>
  );
};

export default Dashboard;
