import React from "react";
import accessbank from "@/public/accessbank.svg";
import Image from "next/image";
import bell from "@/assets/icons/bell.svg";
import avatar from "@/public/avatar.svg";
import search from "@/assets/icons/search.svg";
const Header = () => {
  return (
    <div className="p-6 h-[105px] shadow-md grid grid-cols-12 w-full">
      <div className="col-span-9 flex justify-between items-center px-4">
        <Image src={accessbank} alt="logo" priority width={120} height={120} />
        <div className="relative border  mx-8 flex items-center pl-2 gap-1 w-fit border-gray-200 ">
          <Image
            src={search}
            alt="search"
            width={20}
            height={20}
            className=""
          />
          <input
            type="search"
            placeholder="Search"
            className=" p-2 rounded-sm h-[40px] w-[450px] outline-none"
          />
        </div>
      </div>
      <div className="col-span-3 flex justify-around items-center">
        <div className="flex justify-center items-center border p-4 h-fit border-gray-200 rounded-sm">
          <Image src={bell} alt="bell" width={20} height={20} />
        </div>
        <div className="flex gap-4">
          <Image src={avatar} alt="avatar" width={60} height={60} />
          <div className="flex justify-center flex-col">
            <p className="mb-1 font-bold">John Doe</p>
            <p className="text-sm text-gray-600">Employee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
