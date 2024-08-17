"use client"
import React, { useState } from "react";

const useFirstSetup = () => {
  const [countryId, setCountryId] = useState<number | null>(null);
  const [stateId, setStateId] = useState<number | null>(null);
  const [cityId, setCityId] = useState<number | null>(null);
  // const [error, setError] = useState<string>("");

  const handleCountryChange = (e: any) => {
    setCountryId(e.id);
    setStateId(null);
    setCityId(null);
    //   setError("");
  };

  const handleStateChange = (e: any) => {
    //   if (!countryId) {
    //     setError("Please select a country first.");
    //     return;
    //   }
    setStateId(e.id);
    setCityId(null);
    //   setError("");
  };

  const handleCityChange = (e: any) => {
    if (!stateId) {
      // setError("Please select a state first.");
      return;
    }
    setCityId(e.id);
    //   setError("");
  };
  return {
    countryId,
    stateId,
    cityId,
    handleCountryChange,
    handleStateChange,
    handleCityChange,
  };
};

export default useFirstSetup;
