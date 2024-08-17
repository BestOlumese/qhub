import React from "react";
import LabelInputContainer from "@/components/ui/Form/LabelInputContainer";
import { Label } from "@/components/ui/Form/Label";
import { Input } from "@/components/ui/Form/Input";
import {
  // CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
// import "react-country-state-city/dist/react-country-state-city.css";
import useFirstSetup from "@/hooks/useFirstSetup";
const FirstSetup = () => {
  const { countryId, handleCountryChange, handleStateChange } = useFirstSetup();

  return (
    <>
      <LabelInputContainer className="my-4">
        <Label htmlFor="name">Address</Label>
        <Input
          id="address"
          placeholder="5, Ogbomosho Street, Off Allen Avenue, Ikeja, Lagos"
          type="text"
          // value={email}
          // onChange={handleEmailChange}
        />
      </LabelInputContainer>
      <div className="flex gap-4 items-center">
        <LabelInputContainer className="my-4">
          <Label htmlFor="name">Country</Label>

          <CountrySelect
            onChange={handleCountryChange}
            placeHolder="Select Country"
            autoComplete="none"
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
            className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            disabled={!countryId}
          />
        </LabelInputContainer>
      </div>
      <div className="flex gap-4 items-center">
        <LabelInputContainer className="my-4">
          <Label htmlFor="name">City</Label>
          <Input
            id="address"
            placeholder="e.g Lagos"
            type="text"

            // value={email}
            // onChange={handleEmailChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="my-4">
          <Label htmlFor="name">Zip Code</Label>
          <Input
            id="address"
            placeholder="e.g 100001"
            type="text"
            autoComplete="none"
            // value={email}
            // onChange={handleEmailChange}
          />
        </LabelInputContainer>
      </div>
    </>
  );
};

export default FirstSetup;
