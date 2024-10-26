import { resources } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="p-6">
      <h1 className="font-bold max-md:text-lg text-xl">Resources</h1>
      <p className="max-md:text-sm">Browse our collection of resources to help you thrive.</p>
      <div className="mt-7 grid max-xl:grid-cols-3 max-md:grid-cols-2 grid-cols-4 gap-6">
        {resources.map((resource, idx) => (
          <div key={idx}>
            <Image
              src={resource.image}
              alt={resource.name}
              width={300}
              height={200}
            />
            <h3 className="font-bold mt-1">{resource.name}</h3>
            <p className="mt-2 text-sm">{resource.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
