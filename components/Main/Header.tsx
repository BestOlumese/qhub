"use client";
import React, { useEffect, useState } from "react";
import accessbank from "@/public/accessbank.svg";
import Image from "next/image";
import Cookies from "js-cookie";

const Header = () => {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [userPic, setUserPic] = useState("/avatar.png");
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const firstName = Cookies.get("firstName") || "";
    const lastName = Cookies.get("lastName") || "";
    const userRole = Cookies.get("role");
    const logo = Cookies.get("logo") || "";


    const name = `${firstName} ${lastName}`;
    // const avatarUrl = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`;
    const readableRole = userRole === "organizationOwner" ? "Admin" : "Employee";

    setFullName(name);
    setRole(readableRole);
    // setUserPic(avatarUrl);
    setLogo(logo);
  }, []);

  return (
    <div className="py-6 px-2 shadow-md grid grid-cols-12 w-full items-center">
      <div className="col-span-8 flex justify-between items-center px-4">
        {logo && <Image src={logo} alt="logo" priority width={100} height={24} />}
      </div>
      <div className="col-span-4 flex justify-between lg:px-10 items-center justify-self-end">
        <div className="flex gap-4">
          <Image
            src={userPic}
            alt="avatar"
            priority
            className="md:w-14 w-10 h-10 md:h-14 rounded-full"
            width={50}
            height={50}
          />
          <div className="flex justify-center flex-col max-xl:hidden">
            <p className="mb-1 text-[14px] font-bold">{fullName}</p>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
