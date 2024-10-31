import BrowseResourceHeader from "./BrowseResourceHeader";
import resource from "@/assets/icons/resource.gif";
import UploadResource from "./UploadResource";
import Image from "next/image";
import { resources } from "@/lib/data";
import React from "react";
import Link from "next/link";
const AdminResourcesPage = () => {
  return (
    <div className="p-6">
      <div className="flex max-lg:flex-col justify-between">
        <h2 className="font-semibold">Resources</h2>
        <UploadResource />
      </div>
      <div className="w-full mt-4 h-[calc(100vh-200px)] bg-white rounded-md  border border-gray-300">
        <BrowseResourceHeader />
        <div className="p-6 h-[calc(100%-80px)] overflow-y-auto ">
          {resources.length > 0 ? (
            <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2">
              {resources.map((resource, idx) => (
                <Link
                  href={`/dashboard/resources/${resource.name
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  key={idx}
                  className="cursor-pointer"
                >
                  <Image
                    src={resource.image}
                    alt={resource.name}
                    width={300}
                    height={200}
                  />
                  <h3 className="font-bold mt-1">{resource.name}</h3>
                  <p className="text-xs text-gray-500">{resource.type}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-colitems-center justify-center">
              <img src={resource.src} alt="resource" width={100} height={100} />
              <h2 className="mb-3">No resources found</h2>
              <UploadResource />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AdminResourcesPage;
