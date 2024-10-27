"use client";
import { adminSidebar, employeeSidebar } from "@/lib/data";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Role = "employee" | "admin";
const Bottombar = () => {
  const pathname = usePathname();

  const user: { role: Role } = {
    role: "employee",
  };

  const role = user.role;
  const activeSidebar = role === "employee" ? employeeSidebar : adminSidebar;

  return (
    <section className="bg-yellow/5 right-0 w-full fixed bottom-0 rounded-t-3xl p-4 backdrop-blur-lg xs:px-6 md:hidden">
      <div className="flex items-center justify-between gap-3">
        {activeSidebar.map((item, index) => {
          const isActive =
            item.link === pathname || item.link.endsWith(pathname);
          return (
            <Link
              href={item.link}
              className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 ${
                isActive ? "bg-primary/50 " : ""
              }`}
              key={index}
            >
              {item.icon}

              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {item.name.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;
