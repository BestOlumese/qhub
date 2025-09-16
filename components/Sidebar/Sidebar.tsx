"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/logo.jpg";
import SidebarContent from "./SidebarContent";
import { TbLogout2 } from "react-icons/tb";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Sidebar = ({ onClose }: { onClose?: () => void }) => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("firstName");
    Cookies.remove("lastName");
    Cookies.remove("email");
    Cookies.remove("role");
    Cookies.remove("organizationId");
    Cookies.remove("logo");
    router.push("/login");
  };

  return (
    <aside className="w-64 bg-white text-black h-full flex flex-col justify-between py-6 shadow-lg">
      <div>
        {/* Logo */}
        <div
          className="flex justify-center items-center mb-6 cursor-pointer"
          onClick={onClose}
        >
          <Image
            src={logo}
            alt="logo"
            priority
            className="w-28 max-md:w-24" // Increased size
          />
        </div>

        {/* Sidebar Links */}
        <SidebarContent />
      </div>

      {/* Logout */}
      <div className="px-6">
        <p
          onClick={handleLogout}
          className="flex cursor-pointer gap-2 items-center text-red-500 hover:text-red-600 transition"
        >
          <TbLogout2 />
          Logout
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
