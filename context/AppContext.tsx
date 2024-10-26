"use client";
import { AppContextType, Module } from "@/lib/types";
import React, { createContext, useEffect, useRef, useState } from "react";
export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [modules, setModules] = useState<Module[]>([]);
  return (
    <AppContext.Provider
      value={{
        modules,
        setModules,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
