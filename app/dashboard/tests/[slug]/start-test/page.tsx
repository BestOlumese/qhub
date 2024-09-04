import Test from "@/components/Tests/Test";
import TestSlug from "@/components/Tests/TestSlug";
import React from "react";

const StartTest = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  let slug = params.slug.replace(/-/g, " ");
  slug = slug.replace("/start-test", "");
  return (
    <div className="h-full">
      <TestSlug slug={slug} />
      <div className="p-4 px-6 h-[90%]">
        <Test />
      </div>
    </div>
  );
};

export default StartTest;
