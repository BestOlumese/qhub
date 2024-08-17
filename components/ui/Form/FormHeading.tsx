import React from "react";

const FormHeading = ({ title }: { title: string }) => {
  return (
    <h1 className="text-black kumbh-sans text-4xl font-semibold text-center my-2">
      {title}
    </h1>
  );
};

export default FormHeading;
