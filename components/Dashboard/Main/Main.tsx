"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Bottombar from "./Bottombar";
import Header from "./Header";
import { LuPanelLeft } from "react-icons/lu";
const Main: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const start = pathname.includes("start-");
  useEffect(() => {
    if (start) {
      setIsOpen(false);
    }
  }, [start]);
  const handleTogglePanel = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-screen  w-full overflow-y-hidden flex relative ">
      {start && (
        <LuPanelLeft
          className={` left-1 md:hidden absolute transition-all duration-500 ${
            isOpen ? "top-28" : " top-4 "
          } cursor-pointer`}
          onClick={handleTogglePanel}
        />
      )}
      <div
        className={`relative ${
          isOpen ? "w-[20%]" : "w-0"
        } transition-all duration-500 max-md:hidden`}
      >
        <Sidebar />
        {start && (
          <LuPanelLeft
            className={` text-2xl  absolute transition-all duration-500 ${
              isOpen ? "top-[120px] -right-3" : "left-4 top-4 "
            } cursor-pointer`}
            onClick={handleTogglePanel}
          />
        )}
      </div>

      <div
        className={`${
          isOpen ? "md:w-[80%]" : "w-full"
        } flex flex-col w-full transition-all duration-500 max-h-screen overflow-auto`}
      >
        <div className={`${isOpen ? "block" : " hidden"} `}>
          <Header />
        </div>
        {children}
      </div>
      {isOpen && <Bottombar />}
    </div>
  );
};

export default Main;
