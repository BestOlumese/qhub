import Image from "next/image";
import React from "react";
import image from "@/public/signinimage.jpeg";
import Logo from "@/public/logo.png";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const Signin: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="lg:grid lg:grid-cols-12 h-screen overflow-hidden bg-primary-light">
      <div className="lg:col-span-6 h-full w-full">
        <Image
          src={Logo}
          alt="Logo"
          className="z-10 absolute top-4 left-4 sm:top-6 sm:left-6 max-[400px]:w-28"
          width={140}
          height={140}
        />
        <Image
          src={image}
          alt="image of an organization"
          className="w-full h-full "
          priority
        />
      </div>
      <div className="md:col-span-6 flex items-center justify-center h-screen z-10  max-lg:absolute top-0 w-full max-lg:bg-black/25">
        <div className="bg-white p-6 md:p-10 min-w-[90%] md:min-w-[50%] max-w-sm max-h-[92%]  xl:min-h-[50%]  flex flex-col items-center justify-center rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Signin;
