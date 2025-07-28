import React from "react";
import { Input } from "../ui/input";
import { Option } from "@/lib/types";
import { IconPlus } from "@tabler/icons-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const MultiChoiceOption = ({
  onChange,
  options,
  handleAddOption,
  selectedOption,
  setSelectedOption
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: Option[];
  handleAddOption: () => void;
  selectedOption: string;
  setSelectedOption: (id: string) => void;
}) => {
  return (
    <>
      <div className="bg-gray-200 rounded-md p-4">
        <RadioGroup 
          value={selectedOption} 
          onValueChange={setSelectedOption}
        >
          {options.map((option, index) => (
            <div
              className="flex items-center space-x-2 bg-white p-4 rounded-md"
              key={index}
            >
              <RadioGroupItem value={option.id} id={option.id} />
              <Input
                id={option.id}
                placeholder={`Option ${index + 1}`}
                className="col-span-3"
                value={option.name}
                onChange={onChange}
              />
            </div>
          ))}
        </RadioGroup>
      </div>
      <p
        className="text-primary text-sm mt-1 flex items-center gap-2 font-medium cursor-pointer"
        onClick={handleAddOption}
      >
        <IconPlus className="w-5 h-5 font-bold" />
        Add Option
      </p>
    </>
  );
};

export default MultiChoiceOption;
