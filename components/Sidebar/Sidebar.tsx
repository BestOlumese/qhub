import Image from "next/image";
import React from "react";
import logo from "@/public/sidebarlogo.svg";
import Link from "next/link";
import SidebarContent from "./SidebarContent";
import { TbLogout2 } from "react-icons/tb";
import { cn } from "@/lib/utils";

const Sidebar = ({ className }: { className?: string }) => {
  return (
    <aside
      className={cn(
        " overflow-hidden lg:w-[250px] bg-primary-light/50 py-6 text-black h-screen justify-between flex flex-col ",
        className
      )}
    >
      <div>
        <div className=" max-md:px-4 px-6">
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
        className="flex px-6 max-md:px-4  hover:bg-lightBlue p-2 gap-2 items-center text-red-500"
      >
        <TbLogout2 />
        Logout
      </Link>
    </aside>
  );
};

export default Sidebar;
