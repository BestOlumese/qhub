"use client";
import React, { useState } from "react";
import FirstSetup from "./FirstSetup";
import SecondSetup from "./SecondSetup";
import { useRouter } from "next/navigation";
import { UserInputs } from "@/lib/types";
const AccountSetupForm = () => {
  const [showSecondSetup, setShowSecondSetup] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [countryId, setCountryId] = useState<number | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const router = useRouter();
  const [userInputs, setUserInputs] = useState<UserInputs>({
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    website: "",
    logo: "",
    employeeNo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputs({ ...userInputs, [e.target.id]: e.target.value });
    
  };
  const handlePrevious = () => {
    setShowSecondSetup(false);
  };

  const handleNext = () => {
    console.log(userInputs);

    if (
      !userInputs.address ||
      !userInputs.city ||
      !userInputs.state ||
      !userInputs.country ||
      !userInputs.zipCode
    ) {
      setError("Please fill in all fields");
      return;
    } else {
      setError(null);
      setShowSecondSetup(true);
    }
  };
  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 6 || isNaN(Number(e.target.value))) {
      return;
    } else {
      setUserInputs({ ...userInputs, zipCode: e.target.value });
    }
  };
  const handleStateChange = (e: {
    id: number;
    name: string;
    country_id: number;
  }) => {
    setUserInputs({ ...userInputs, state: e.name });
  };

  const handleCountryChange = (e: {
    id: number;
    name: string;
    country_id: number;
  }) => {
    setCountryId(e.id);
    setUserInputs({ ...userInputs, country: e.name });
  };
  const handleLogoChange = (
    event: React.ChangeEvent<HTMLInputElement & { files: FileList }>
  ) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setUserInputs((prev) => ({ ...prev, logo: previewURL }));
      setLogoPreview(previewURL);
      let formattedName = file.name;
      if (file.name.length > 20) {
        formattedName = file.name.slice(0, 10) + "...";
      }
      setFileName(formattedName);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInputs.employeeNo || !userInputs.logo) {
      setError("Please fill in all fields");
      return;
    }

    router.push("/dashboard");
  };
  return (
    <form action="" className="mt-10" onSubmit={handleSubmit}>
      {showSecondSetup ? (
        <SecondSetup
          userInputs={userInputs}
          handleChange={handleChange}
          handlePrevious={handlePrevious}
          error={error}
          logoPreview={logoPreview}
          fileName={fileName}
          handleLogoChange={handleLogoChange}
        />
      ) : (
        <FirstSetup
          userInputs={userInputs}
          handleChange={handleChange}
          handleNext={handleNext}
          error={error}
          handleCountryChange={handleCountryChange}
          handleStateChange={handleStateChange}
          countryId={countryId}
          handleZipCodeChange={handleZipCodeChange}
        />
      )}
    </form>
  );
};

export default AccountSetupForm;
