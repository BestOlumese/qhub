import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  redirect("/login");
  return <div>Qhun LMS</div>;
};

export default page;
