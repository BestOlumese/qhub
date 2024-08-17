import React from "react";
import Star from "@/components/ui/Star";
import ProgressBar from "@/components/ui/ProgressBar";
const CustomerRating = () => {
  return (
    <div className="col-span-9">
      <h1 className="font-bold text-xl">Average customer ratings</h1>

      <div className="mt-6 flex flex-col gap-3">
        <div className="flex gap-8 items-center justify-center">
          <ProgressBar value={80} max={100} />
          <p className="flex gap-3 items-center justify-center">
            <Star className="text-sm" starCount={5} /> <span>80%</span>
          </p>
        </div>
        <div className="flex gap-8 items-center justify-center">
          <ProgressBar value={60} max={100} />
          <p className="flex gap-3 items-center justify-center">
            <Star className="text-sm" starCount={4} /> <span>60%</span>
          </p>
        </div>
        <div className="flex gap-8 items-center justify-center">
          <ProgressBar value={40} max={100} />
          <p className="flex gap-3 items-center justify-center">
            <Star className="text-sm" starCount={3} /> <span>40%</span>
          </p>
        </div>
        <div className="flex gap-8 items-center justify-center">
          <ProgressBar value={30} max={100} />
          <p className="flex gap-3 items-center justify-center">
            <Star className="text-sm" starCount={2} /> <span>30%</span>
          </p>
        </div>
        <div className="flex gap-8 items-center justify-center">
          <ProgressBar value={20} max={100} />
          <p className="flex gap-3 items-center justify-center">
            <Star className="text-sm" starCount={1} /> <span>20%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerRating;
