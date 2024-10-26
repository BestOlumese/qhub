import React from "react";
import { Input } from "../ui/input";
import { Option } from "@/lib/types";
const ShortAnswerOption = ({
  option,
  onChange,
}: {
  option: Option;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Input
      id={option.id}
      placeholder={`Type short answer here`}
      className="col-span-3"
      value={option.name}
      onChange={onChange}
    />
  );
};

export default ShortAnswerOption;
