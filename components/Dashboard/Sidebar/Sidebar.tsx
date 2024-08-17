import Image from "next/image";
import React from "react";
import logo from "@/public/sidebarlogo.svg";

import Link from "next/link";
import SidebarContent from "./SidebarContent";
import { TbLogout2 } from "react-icons/tb";
const Sidebar = () => {
  return (
    <aside className="col-span-2 text-xl overflow-hidden bg-primary-light/50 py-6 text-black h-screen justify-between flex flex-col ">
      <div>
        <div className="flex w-full justify-center items-center">
          <Image src={logo} alt="logo" priority />
        </div>
        <SidebarContent />
      </div>
      <div className="px-10">
        <Link href="/login" className="flex gap-2 items-center text-red-500">
          <TbLogout2 />
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
