import React from "react";
import LabelInputContainer from "@/components/ui/Form/LabelInputContainer";
import { Label } from "@/components/ui/Form/Label";
import { Input } from "@/components/ui/Form/Input";
import {
  // CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { UserInputs } from "@/lib/types";
// import "react-country-state-city/dist/react-country-state-city.css";

const FirstSetup = ({
  userInputs,
  handleChange,
  handleCountryChange,
  handleStateChange,
  handleNext,
  error,
  countryId,
  handleZipCodeChange,
}: {
  userInputs: UserInputs;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCountryChange: (e: any) => void;
  handleStateChange: (e: any) => void;
  handleNext: () => void;
  error: string | null;
  countryId: number | null;
  handleZipCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <LabelInputContainer className="my-4">
        <Label htmlFor="name">Address *</Label>
        <Input
          id="address"
          placeholder="5, Ogbomosho Street, Off Allen Avenue, Ikeja, Lagos"
          type="text"
          value={userInputs.address}
          onChange={handleChange}
        />
      </LabelInputContainer>
      <div className="flex gap-4 items-center">
        <LabelInputContainer className="my-4">
          <Label htmlFor="name">Country *</Label>

          <CountrySelect
            onChange={handleCountryChange}
            placeHolder="Select Country"
            autoComplete="none"
            id="country"
            name={userInputs.country}
            className="flex h-10 w-full border-none bg-gray-50  text-black  shadow-input rounded-md px-3 py-2 text-sm"
          />
        </LabelInputContainer>
        <LabelInputContainer className="my-4">
          <Label htmlFor="name">State</Label>

          <StateSelect
            countryid={countryId ?? 0}
            onChange={handleStateChange}
            placeHolder="Select State"
            autoComplete="none"
            name={userInputs.state}
            id="state"
            className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            disabled={!countryId}
          />
        </LabelInputContainer>
      </div>
      <div className="flex gap-4 items-center">
        <LabelInputContainer className="my-4">
          <Label htmlFor="name">City *</Label>
          <Input
            id="city"
            placeholder="e.g Lagos"
            type="text"
            value={userInputs.city}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="my-4">
          <Label htmlFor="name">Zip Code *</Label>
          <Input
            id="zipCode"
            placeholder="e.g 100001"
            type="text"
            autoComplete="none"
            value={userInputs.zipCode}
            onChange={handleZipCodeChange}
          />
        </LabelInputContainer>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="flex justify-end">
        <button
          className="flex items-center gap-2 bg-primary rounded-md text-white p-2 px-4 md:px-6 mt-4 max-md:text-sm"
          type="button"
          onClick={handleNext}
        >
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FirstSetup;
