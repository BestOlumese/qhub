import React from "react";
import image from "@/public/courseimage.png";
import Image from "next/image";
import Button from "../ui/Button";
import ProgressBar from "../ui/ProgressBar";
import Link from "next/link";
const Course = ({ enrolled }: { enrolled: boolean }) => {
  return (
    <Link
      href={`/dashboard/courses/introduction-to-data-science`}
      className="w-[320px] bg-primary-light cursor-pointer  py-4 flex gap-2 flex-col rounded-md"
    >
      <div className="px-3 w-full mb-4">
        <Image src={image} alt="course image" />
        <h1 className="font-bold text-xl my-2">Introduction to Data Science</h1>
        {enrolled ? (
          <div>
            <p className="text-sm my-1">3 modules | 20 videos</p>

            <div className="flex gap-2 my-1 items-center">
              <div className="w-[60%]">
                <ProgressBar max={100} value={72} />
              </div>
              <p className="text-xs">45% completed</p>
            </div>
            <div className="mt-4">
              <Button text="Continue" />
            </div>
          </div>
        ) : (
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, consectetur.
            </p>

            <div className="border-t border-t-black/20 w-full flex gap-4 mt-2 items-center p-2 pb-0 px-3 ">
              <p>15 Lessons</p>
              <hr className="rotate-90 border border-black/20 w-6" />
              <p>18 students</p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Course;
