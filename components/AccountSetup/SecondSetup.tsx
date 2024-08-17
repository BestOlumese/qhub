import React from "react";
import LabelInputContainer from "@/components/ui/Form/LabelInputContainer";
import { Label } from "@/components/ui/Form/Label";
import { Input } from "@/components/ui/Form/Input";
import Image from "next/image";
import useSecondSetup from "@/hooks/useSecondSetup";
const SecondSetup = () => {
  const { logoPreview, fileName, handleLogoChange } = useSecondSetup();

  return (
    <>
      <LabelInputContainer className="my-4">
        <Label htmlFor="employees">No. of Employees</Label>

        <select
          name=""
          id=""
          className="flex outline-none h-10 w-full border-none bg-gray-50  text-black  shadow-input rounded-md px-3 py-2 text-sm  
          
          "
        >
          <option value="">--Select an option--</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-200">51-200</option>
          <option value="201-500">200 and above</option>
        </select>
      </LabelInputContainer>

      <LabelInputContainer className="my-4">
        <Label htmlFor="website-url">Website URL</Label>
        <Input
          id="website-url"
          placeholder="https://www.example.com"
          type="text"
        />
      </LabelInputContainer>

      <LabelInputContainer className="my-4">
        <Label>Organization Logo</Label>
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
    </>
  );
};

export default SecondSetup;
