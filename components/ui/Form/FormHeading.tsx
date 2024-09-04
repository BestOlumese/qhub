import React from "react";

const FormHeading = ({ title }: { title: string }) => {
  return (
    <h1 className="text-black kumbh-sans text-xl sm:text-2xl 2xl:text-4xl font-semibold text-center 2xl:my-2">
      {title}
    </h1>
  );
};

export default FormHeading;
