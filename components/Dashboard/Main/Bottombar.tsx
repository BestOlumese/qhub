"use client";
import { sidebar } from "@/lib/data";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
const Bottombar = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[2];

  const getActive = ({ link }: { link: string }) => {
    return link.split("/")[2];
  };
  return (
    <section className="bg-yellow/5 row-span-2 col-span-12 right-0 w-full fixed bottom-0 rounded-t-3xl p-4 backdrop-blur-lg xs:px-7 md:hidden">
      <div className="flex items-center justify-between gap-3 xs:gap-5">
        {sidebar.map((item, index) => (
          <Link
            href={item.link}
            className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 ${
              getActive(item) === path ? "bg-primary/50 " : ""
            }`}
            key={index}
          >
            <Image src={item.icon} alt={item.name} width={24} height={24} title={item.name} />

            <p className="text-subtle-medium text-light-1 max-sm:hidden">
              {item.name.split(/\s+/)[0]}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Bottombar;
