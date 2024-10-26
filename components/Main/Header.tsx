import React from "react";
import accessbank from "@/public/accessbank.svg";
import Image from "next/image";
import bell from "@/assets/icons/bell.svg";
import avatar from "@/public/avatar.svg";

const Header = () => {
  return (
    <div className="p-6  shadow-md border-b border-b-gray-200 w-full flex justify-between  items-center ">
      <div className="flex justify-between items-center px-4">
        <Image src={accessbank} alt="logo" priority className="w-28 md:w-32" />
      </div>
      <div className=" flex justify-between lg:px-10 gap-6 items-center">
        <Image src={bell} alt="bell" width={20} height={20} />

        <div className="flex gap-4">
          <Image
            src={avatar}
            alt="avatar"
            className="md:w-14 w-10 h-10 md:h-14 "
          />
          <div className="flex justify-center flex-col max-xl:hidden">
            <p className="mb-1 font-bold">John Doe</p>
            <p className="text-sm text-gray-600">Employee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
