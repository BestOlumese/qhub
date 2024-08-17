"use client";
import React, { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";

import "react-country-state-city/dist/react-country-state-city.css";

const AccountSetupForm: React.FC = () => {
  const [countryId, setCountryId] = useState<number | null>(null);
  const [stateId, setStateId] = useState<number | null>(null);
  const [cityId, setCityId] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleCountryChange = (e: any) => {
    setCountryId(e.id);
    setStateId(null);
    setCityId(null);
    setError("");
  };

  const handleStateChange = (e: any) => {
    if (!countryId) {
      setError("Please select a country first.");
      return;
    }
    setStateId(e.id);
    setCityId(null);
    setError("");
  };

  const handleCityChange = (e: any) => {
    if (!stateId) {
      setError("Please select a state first.");
      return;
    }
    setCityId(e.id);
    setError("");
  };
  console.log(countryId);
  console.log(stateId)
  return (
    <form className="mt-10 space-y-4">
      {error && <p className="text-red-500">{error}</p>}

      <div>
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <CountrySelect
          onChange={handleCountryChange}
          placeHolder="Select Country"
          className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="state"
          className="block text-sm font-medium text-gray-700"
        >
          State
        </label>
        <StateSelect
          countryid={countryId ?? 0}
          onChange={handleStateChange}
          placeHolder="Select State"
          className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          disabled={!countryId}
        />
      </div>

      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          City
        </label>
        <CitySelect
          countryid={countryId ?? 0}
          stateid={stateId ?? 0}
          onChange={handleCityChange}
          placeHolder="Select City"
          className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          disabled={!stateId}
        />
      </div>
    </form>
  );
};

export default AccountSetupForm;
