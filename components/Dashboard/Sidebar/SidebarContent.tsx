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
            className={`flex items-center px-10 gap-4 font-semibold py-3 my-2 border-4 border-transparent ${
              getActive(item) === path ? "bg-lightBlue border-l-primary " : ""
            }`}
          >
            <Image src={item.icon} alt={item.name} width={25} height={25} />
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SidebarContent;
