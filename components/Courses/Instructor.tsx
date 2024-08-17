import React from "react";
import instructor from "@/public/instructor.png";
import Image from "next/image";
const Instructor = () => {
  return (
    <div className=" gap-8 w-full h-full grid grid-cols-12 mt-10">
      <div className="col-span-3">
        <Image
          src={instructor}
          alt="Instructor"
          priority
          width={500}
          height={500}
        />
      </div>
      <div className="col-span-9">
        <h1 className="text-2xl font-bold">
          Matthew Taylor{" "}
          <span className="text-slate-500/50 font-normal">
            / Accounting Teacher
          </span>
        </h1>
        <p className="mt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          doloribus ad aspernatur quidem cupiditate eveniet odio nemo ipsam,
          repellat esse error repellendus laboriosam aliquid minima mollitia,
          vel ipsa quo? Commodi! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Non consequatur error amet voluptatem, veritatis
          consequuntur maxime atque! Incidunt architecto asperiores minus
          maxime! Maxime, soluta tempore. Necessitatibus repellat beatae placeat
          odio.
        </p>
      </div>
    </div>
  );
};

export default Instructor;
