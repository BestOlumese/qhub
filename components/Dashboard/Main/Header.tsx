import React from "react";
import accessbank from "@/public/accessbank.svg";
import Image from "next/image";
import bell from "@/assets/icons/bell.svg";
import avatar from "@/public/avatar.svg";
import search from "@/assets/icons/search.svg";
const Header = () => {
  return (
    <div className="p-6  shadow-md grid grid-cols-12 w-full  items-center ">
      <div className="col-span-9 flex justify-between items-center px-4">
        <Image src={accessbank} alt="logo" priority className="w-28 md:w-32" />
        {/* <div className="relative border max-md:hidden mx-8 flex items-center pl-2 gap-1 w-fit border-gray-200 ">
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
        </div> */}
      </div>
      <div className="col-span-3 flex justify-between lg:px-10 items-center">
        <Image src={bell} alt="bell" width={20} height={20} />

        <div className="flex gap-4">
          <Image src={avatar} alt="avatar" className="md:w-14 w-10 h-10 md:h-14 " />
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
