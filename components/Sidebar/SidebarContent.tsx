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
  const isAdmin = role === "admin";

  return (
    <ul className="mt-6 flex flex-col gap-2.5">
      {sidebar
        .filter((item) => item.name !== "Employees" || isAdmin)
        .map((item, index) => {
          const isActive =
            item.link === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.link);

          return (
            <Link
              href={item.link}
              className={`flex items-center max-md:text-sm max-md:px-2 px-6 hover:bg-lightBlue gap-4 p-2 border-4 border-transparent ${
                isActive ? "bg-lightBlue border-l-primary" : ""
              }`}
              key={index}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
    </ul>
  );
};

export default SidebarContent;
