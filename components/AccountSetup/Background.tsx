import React from "react";
import image from "@/public/organizationimage.jpg";
import Image from "next/image";
const Background = () => {
  return (
    <Image
      src={image}
      alt="image of an organization"
      className="w-full h-full opacity-30 absolute top-0 left-0"
    />
  );
};

export default Background;
