"use client";
import React from "react";
import Image from "next/image";
import { sidebar } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarContent = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[2];

  const getActive = ({ link }: { link: string }) => {
    return link.split("/")[2];
  };

  return (
    <ul className="mt-8 flex flex-col items-start ">
      {sidebar.map((item, index) => (
        <Link href={item.link} className="w-full " key={index}>
          <li
            className={`flex items-center max-lg:justify-center px-4 xl:px-10 gap-4 font-semibold text-base py-3 my-2 border-4 border-transparent ${
              getActive(item) === path ? "bg-lightBlue border-l-primary " : ""
            }`}
          >
            <Image src={item.icon} alt={item.name} width={20} height={20} />
            <span className="max-lg:hidden visible">{item.name}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SidebarContent;
