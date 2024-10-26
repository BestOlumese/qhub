"use client";
import React from "react";
import { sidebar } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Role = "employee" | "admin";
const SidebarContent = () => {
  const pathname = usePathname();

  const user: { role: Role } = {
    role: "admin",
  };

  const role = user.role;
  const activeSidebar = sidebar[role];
  console.log(pathname, "pathname");

  return (
    <ul className="mt-6 flex flex-col gap-3">
      {activeSidebar.map((item, index) => {
        const isActive =
          item.link === "/dashboard"
            ? pathname === "/dashboard"
            : pathname.startsWith(item.link);

        return (
          <Link href={item.link} className="w-full" key={index}>
            <li
              className={`flex items-center max-lg:justify-center hover:bg-lightBlue px-6 gap-4 font-semibold text-base p-2 border-4 border-transparent ${
                isActive ? "bg-lightBlue border-l-primary" : ""
              }`}
            >
              {item.icon}
              <span className="max-lg:hidden visible">{item.name}</span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default SidebarContent;
