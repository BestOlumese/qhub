import React from "react";

import Image from "next/image";
import { mostActiveEmployees } from "@/lib/data";
import cart from "@/assets/icons/cart-blue.svg";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";

const MostActiveEmployees = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold  text-lg">
          Most Active Employees
        </CardTitle>
        <CardDescription className="text-sm">
          View the most active employees based on the number of courses they
          have taken
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {mostActiveEmployees.map((item, index) => (
          <div
            className="flex items-center justify-between  w-full"
            key={index}
          >
            <div className="flex items-center gap-2 ">
              {item.picture ? (
                <Image
                  src={item.picture}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center capitalize">
                  {item.name.charAt(0)}
                </div>
              )}
              <div className="w-[calc(100%-25px)]">
                <p className=" overflow-x-auto  max-w-full scrollbar whitespace-nowrap">
                  {item.name}
                </p>
                <p className="text-sm text-gray-600 max-w-full whitespace-nowrap overflow-x-auto scrollbar ">
                  {item.email}
                </p>
              </div>
            </div>
            <p>{item.coursesTaken}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default MostActiveEmployees;
