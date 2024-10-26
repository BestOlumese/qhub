"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IconCirclePlus } from "@tabler/icons-react";

import InviteEmployeeForm from "@/components/Admin/InviteEmployeeForm";
import BulkInviteEmployee from "./BulkInviteEmployee";
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
        <button className="bg-primary text-white px-4 p-2 rounded-md ">
          <IconCirclePlus className="inline mr-2 w-5 h-5" />
          Invite New Employee
        </button>
      </SheetTrigger>
      <SheetContent>
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
