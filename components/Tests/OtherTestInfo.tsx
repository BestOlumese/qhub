import React from "react";
import shout from "@/assets/icons/shout.svg";
import Image from "next/image";
import instagram from "@/assets/icons/instagram.svg";
import x from "@/assets/icons/x.svg";
import facebook from "@/assets/icons/facebook.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import email from "@/assets/icons/email.svg";
const OtherTestInfo = () => {
  const icons = [instagram, x, facebook, linkedin, email];
  return (
    <div className="col-span-5 border text-sm border-gray-500/20 p-6 rounded-xl">
      <div className="bg-primary/30 rounded-xl p-4 flex gap-2 items-center">
        <Image src={shout} alt="shout" />
        <p>
          This past question contains a total of <b>50 questions</b> and the
          estimated time to finish is <b>1 hour</b>
        </p>
      </div>
      <h3 className="font-bold mt-8 mb-2">Browse other tests</h3>
      <ul>
        <li className="text-sm my-2 text-primary">
          Compliance and Regulatory Knowledge
        </li>
        <li className="text-sm my-2 text-primary">
          Compliance and Regulatory Knowledge
        </li>
        <li className="text-sm my-2 text-primary">
          Compliance and Regulatory Knowledge
        </li>
        <li className="text-sm my-2 text-primary">
          Compliance and Regulatory Knowledge
        </li>
        <li className="text-sm my-2 text-primary">
          Compliance and Regulatory Knowledge
        </li>
      </ul>
      <h3 className="font-bold mt-8"> Share</h3>
      <div className="flex gap-3 mt-1 ">
        {icons.map((icon, index) => (
          <div key={index} className="bg-primary-light w-10 h-10 justify-center cursor-pointer flex gap-2 items-center my-2">
            <Image src={icon} alt="icon" width={15} height={15} />
          </div>
        ))}
      </div>
      <h3 className="font-bold mt-8">Details</h3>
      <p className="text-sm text-gray-500 mt-3">Last updated 15 August 2024</p>
    </div>
  );
};

export default OtherTestInfo;
