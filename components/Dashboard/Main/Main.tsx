import React from "react";
import Header from "./Header";
const Main: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="col-span-10 h-screen ">
      <Header />
      {children}
    </div>
  );
};

export default Main;
