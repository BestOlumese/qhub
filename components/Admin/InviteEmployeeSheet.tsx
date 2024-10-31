"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IconCirclePlus, IconUser, IconUserPlus } from "@tabler/icons-react";

import InviteEmployeeForm from "@/components/Admin/InviteEmployeeForm";
import BulkInviteEmployee from "./BulkInviteEmployee";
import { Button } from "../ui/button";
const InviteEmployeeSheet = () => {
  const [isBulk, setIsBulk] = useState(false);
  const handleBulkUpload = () => {
    setIsBulk(true);
  };
  const handleGoBack = () => {
    setIsBulk(false);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-primary w-fit max-md:mt-2 text-white hover:bg-primary/90">
          <IconUserPlus className="inline mr-2 w-5 h-5" />
          Invite Employee
        </Button>
      </SheetTrigger>
      <SheetContent className="px-0 py-4">
        {isBulk ? (
          <BulkInviteEmployee onBack={handleGoBack} />
        ) : (
          <InviteEmployeeForm onBulkUpload={handleBulkUpload} />
        )}
      </SheetContent>
    </Sheet>
  );
};

export default InviteEmployeeSheet;
