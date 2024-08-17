import Image from "next/image";
import React from "react";
import image from "@/public/signinimage.jpeg";
import qhub from "@/public/qhub.svg";
const Signin: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden bg-primary-light">
      <div className="col-span-6">
        <Image src={qhub} alt="Qhub Logo" className="z-10 absolute top-6 left-6" width={175} height={55}/>
        <Image
          src={image}
          alt="image of an organization"
          className="w-full h-full -mt-28"
          priority
        />

      </div>
      <div className="col-span-6 flex items-center justify-center h-screen ">
        <div className="bg-white p-10 max-w-4xl min-w-[50%] min-h-[50%] rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Signin;
