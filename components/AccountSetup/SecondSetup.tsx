import React from "react";
import LabelInputContainer from "@/components/ui/Form/LabelInputContainer";
import { Label } from "@/components/ui/Form/Label";
import { Input } from "@/components/ui/Form/Input";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { UserInputs } from "@/lib/types";
const SecondSetup = ({
  userInputs,
  handleChange,
  handlePrevious,
  error,
  logoPreview,
  fileName,
  handleLogoChange,
}: {
  handlePrevious: () => void;
  userInputs: UserInputs;
  handleChange: (e: any) => void;

  error: string | null;
  logoPreview: string | null;
  fileName: string | null;
  handleLogoChange: (e: any) => void;
}) => {
  return (
    <>
      <LabelInputContainer className="my-4">
        <Label htmlFor="employees">No. of Employees *</Label>

        <select
          name="employeeNo"
          id="employeeNo"
          className="flex outline-none h-10 w-full border-none bg-gray-50  text-black  shadow-input rounded-md px-3 py-2 text-sm  
          
          "
          value={userInputs.employeeNo}
          onChange={(e) => handleChange(e)}
        >
          <option value="">--Select an option--</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-200">51-200</option>
          <option value="201-500">200 and above</option>
        </select>
      </LabelInputContainer>

      <LabelInputContainer className="my-4">
        <Label htmlFor="website">Website URL</Label>
        <Input
          id="website"
          placeholder="https://www.example.com"
          type="text"
          value={userInputs.website}
          onChange={handleChange}
        />
      </LabelInputContainer>

      <LabelInputContainer className="my-4">
        <Label>Organization Logo *</Label>
        <input
          id="organization-logo"
          type="file"
          onChange={handleLogoChange}
          accept="image/*"
          className="hidden"
        />
        <div
          className={`flex  ${
            fileName ? "justify-between " : "justify-end"
          } w-full items-center h-10 border-none bg-gray-50   shadow-input rounded-md p-2 px-3 text-sm   
         `}
        >
          {fileName && (
            <p className="text-wrap w-[150px] text-neutral-400 ">{fileName}</p>
          )}

          <label
            htmlFor="organization-logo"
            className="cursor-pointer  bg-primary-light text-black p-1 px-2 text-xs rounded-md"
          >
            Browse File
          </label>
        </div>
        {logoPreview && (
          <div className="mt-4">
            <Image
              src={logoPreview}
              width={80}
              height={80}
              alt="Logo Preview"
              className="max-w-xs h-auto"
            />
          </div>
        )}
      </LabelInputContainer>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div
        className={`flex text-sm items-center 
          justify-between
        `}
      >
        <button
          className="flex items-center gap-2 bg-primary rounded-md text-white p-2 px-6 mt-4"
          onClick={handlePrevious}
        >
          <FaArrowLeft /> Go back
        </button>
        <button className="flex items-center gap-2 bg-primary rounded-md text-white  px-4 md:px-6 max-md:text-sm p-2 mt-4">
          Submit <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default SecondSetup;
