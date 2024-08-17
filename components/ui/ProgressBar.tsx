import React from "react";

const ProgressBar = ({ value, max }:{
    value: number;
    max: number;
}) => {
  const percentage = (value / max) * 100;
  return (
    <div className="w-full bg-slate-200 rounded-full h-2">
      <div
        style={{ width: `${percentage}%` }}
        className="bg-yellow h-full rounded-full"
      ></div>
    </div>
  );
};

export default ProgressBar;
