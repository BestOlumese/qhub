import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
const FormHeading = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <Image
        src={logo}
        alt="logo"
        priority
        className="w-20 max-md:w-16" // Increased size
      />
      
      <h1 className="text-black kumbh-sans text-xl sm:text-2xl 2xl:text-4xl font-semibold text-center 2xl:my-2">
        {title}
      </h1>
    </div>
  );
};

export default FormHeading;
