import React from "react";
import Link from "next/link";
const TestSlug = ({ slug }: { slug: string }) => {
  return (
    <div className="w-full bg-primary-light p-4 px-6 md:px-12 text-sm capitalize max-md:text-xs">
      <p>
        <Link href="/dashboard"> Home </Link>/ <Link href="/dashboard/tests">Tests</Link> /{" "}
        <span className="text-black/50">{slug}</span>
      </p>
    </div>
  );
};

export default TestSlug;
