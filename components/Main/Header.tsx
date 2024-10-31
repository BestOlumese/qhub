import React from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import accessbank from "@/public/accessbank.svg";
import Image from "next/image";
import bell from "@/assets/icons/bell.svg";
import avatar from "@/public/avatar.svg";
import { IconMenu2 } from "@tabler/icons-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  return (
    <div className="p-6 max-md:p-4  shadow-md border-b border-b-gray-200 w-full flex justify-between  items-center ">
      <div className="flex justify-between items-center">
        <Image
          src={accessbank}
          alt="logo"
          width={150}
          height={50}
          className="max-md:w-24"
        />
      </div>
      <div className=" flex justify-between gap-6 items-center">
        <Image
          src={bell}
          alt="bell"
          width={20}
          height={20}
          className="max-md:hidden"
        />
        <Sheet>
          <SheetTrigger asChild>
            <IconMenu2 className="md:hidden" />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="p-0 w-[200px]"
            aria-describedby={undefined}
          >
            <VisuallyHidden.Root>
              <SheetHeader>
                <SheetTitle>Sidebar</SheetTitle>
                <SheetDescription>Sidebar</SheetDescription>
              </SheetHeader>
            </VisuallyHidden.Root>
            <Sidebar className="flex visible" />
          </SheetContent>
        </Sheet>

        <div className="flex gap-4 items-center">
          <div className="flex justify-center flex-col max-xl:hidden">
            <p className=" font-bold">John Doe</p>
            <p className="text-sm text-gray-500">Employee</p>
          </div>
          <Image
            src={avatar}
            alt="avatar"
            className="w-10 h-10  cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
