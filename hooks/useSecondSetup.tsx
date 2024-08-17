"use client"
import React, { useState } from "react";

const useSecondSetup = () => {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const handleLogoChange = (
    event: React.ChangeEvent<HTMLInputElement & { files: FileList }>
  ) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setLogoPreview(previewURL);
      setFileName(file.name);
    }
  };
  return { logoPreview, fileName, handleLogoChange };
};

export default useSecondSetup;
