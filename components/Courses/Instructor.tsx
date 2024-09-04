import React from "react";
import instructor from "@/public/instructor.png";
import Image from "next/image";
const Instructor = () => {
  return (
    <div className=" gap-8 w-full h-full md:grid md:grid-cols-12 mt-10">
      <div className="md:col-span-3 w-full ">
        <Image src={instructor} alt="Instructor" priority className="w-full " />
      </div>
      <div className="md:col-span-9 max-md:mt-4">
        <h1 className="text-xl font-bold">
          Matthew Taylor{" "}
          <span className="text-slate-500/70 font-normal">
            / Accounting Teacher
          </span>
        </h1>
        <p className="mt-3 xl:mt-6 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          doloribus ad aspernatur quidem cupiditate eveniet odio nemo ipsam,
          repellat esse error repellendus laboriosam aliquid minima mollitia,
          vel ipsa quo? Commodi! Lorem, ipsum dolor sit amet consectetur odio.
        </p>
      </div>
    </div>
  );
};

export default Instructor;
