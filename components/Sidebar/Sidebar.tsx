import Image from "next/image";
import React from "react";
import logo from "@/public/sidebarlogo.svg";
import Link from "next/link";
import SidebarContent from "./SidebarContent";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = () => {
  return (
    <aside className=" max-md:hidden overflow-hidden w-[250px] bg-primary-light/50 py-6 text-black h-screen justify-between flex flex-col ">
      <div>
        <div className=" px-6">
          <Image
            src={logo}
            alt="logo"
            priority
            className="max-lg:w-20 cursor-pointer"
          />
        </div>
        <SidebarContent />
      </div>

      <Link
        href="/login"
        className="flex px-6 hover:bg-lightBlue p-2 gap-2 items-center text-red-500"
      >
        <TbLogout2 />
        Logout
      </Link>
    </aside>
  );
};

export default Sidebar;
