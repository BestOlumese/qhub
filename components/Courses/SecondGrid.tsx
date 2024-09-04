import React from "react";
import woman from "@/public/womanspeaking.png";
import { CiPlay1 } from "react-icons/ci";
import { courseinfo } from "@/lib/data";
import Image from "next/image";
import Button from "../ui/Button";
const SecondGrid = () => {
  return (
    <div className="bg-primary-light col-span-3 text-sm h-fit sticky top-0 max-xl:hidden">
      <div className="w-fit h-fit relative">
        <Image src={woman} alt="Woman Speaking" width={500} height={500} />
        <div className="border border-white rounded-full flex items-center text-xl justify-center w-14 h-14 absolute top-[32%] right-[42%] text-white">
          <CiPlay1 />
        </div>
      </div>
      <div className="px-4 pb-5">
        <ul className="mb-5">
          {courseinfo.map((info, index) => (
            <li
              key={index}
              className="flex my-4 justify-between items-center border-b py-2 border-b-slate-300"
            >
              <span className="flex font-bold items-center justify-center gap-2">
                <Image src={info.icon} alt={info.title} />
                {info.title}
              </span>
              <p>{info.content}</p>
            </li>
          ))}
        </ul>
        <Button text="Start Course" />
      </div>
    </div>
  );
};

export default SecondGrid;
