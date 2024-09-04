import Image from "next/image";
import React from "react";
import testimage from "@/public/testimage.png";
import TestDetails from "@/components/Tests/TestDetails";
import TestSlug from "@/components/Tests/TestSlug";
const page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const slug = params.slug.replace(/-/g, " ");
  return (
    <div className="h-full ">
      <TestSlug slug={slug} />
      <div className=" p-4 lg:p-6">
        <Image src={testimage} alt="testimage" />
        <TestDetails />
      </div>
    </div>
  );
};

export default page;
