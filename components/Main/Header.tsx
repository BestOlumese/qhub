"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = ({ onToggleSidebar }: { onToggleSidebar?: () => void }) => {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [userPic, setUserPic] = useState("/avatar.png");
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const firstName = Cookies.get("firstName") || "";
    const lastName = Cookies.get("lastName") || "";
    const userRole = Cookies.get("role");
    const orgLogo = Cookies.get("logo") || "";

    const name = `${firstName} ${lastName}`;
    const readableRole =
      userRole === "organizationOwner" ? "Admin" : "Employee";

    setFullName(name);
    setRole(readableRole);
    setLogo(orgLogo);
  }, []);

  return (
    <div className="py-4 px-4 shadow-md grid grid-cols-12 w-full items-center bg-white">
      {/* Mobile Hamburger */}
      <div className="col-span-2 md:hidden flex items-center">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          <HiMenuAlt3 size={28} />
        </button>
      </div>

      {/* Org Logo */}
      <div className="col-span-6 md:col-span-8 flex items-center">
        {logo && (
          <Image src={logo} alt="logo" priority width={100} height={24} />
        )}
      </div>

      {/* User Profile */}
      <div className="col-span-4 flex justify-end items-center gap-3">
        <Image
          src={userPic}
          alt="avatar"
          priority
          className="md:w-14 w-10 h-10 md:h-14 rounded-full"
          width={50}
          height={50}
        />
        <div className="hidden xl:flex flex-col justify-center">
          <p className="mb-1 text-[14px] font-bold">{fullName}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
