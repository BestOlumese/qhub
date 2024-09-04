import React from "react";
import search from "@/assets/icons/search.svg";
import Image from "next/image";
import MappedTests from "@/components/Tests/MappedTests";
const Tests = () => {
  return (
    <div className="p-6 ">
      <div className="max-md:flex justify-between items-center">
        <h1 className="font-bold text-3xl">Tests</h1>
        <div className="w-full flex justify-end">
          <div className="relative border border-black/30  rounded-full  md:mx-8 flex items-center pl-3 gap-1 w-fit border-gray-200 ">
            <Image
              src={search}
              alt="search"
              width={20}
              height={20}
              className=""
            />
            <input
              type="search"
              name=""
              id=""
              className="rounded-full w-[180px] md:w-[300px] p-2 md:p-3 outline-none"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <MappedTests />
    </div>
  );
};

export default Tests;
