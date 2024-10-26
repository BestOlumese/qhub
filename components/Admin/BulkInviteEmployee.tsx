import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "../ui/button";
const BulkInviteEmployee = ({ onBack }: { onBack: () => void }) => {
  const employeeColumns = ["First Name", "Last Name", "Email", "Role"];
  return (
    <>
      <SheetHeader>
        <SheetTitle>Bulk Invite New Employee</SheetTitle>
        <SheetDescription>
          Upload a csv file with the following columns:
        </SheetDescription>
      </SheetHeader>

      <div className="mt-4">
        <ul className="w-full mt-4 text-sm flex flex-col gap-1.5 list-disc list-inside">
          {employeeColumns.map((column, index) => (
            <li key={index} className="text-sm font-medium">
              {column}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 mt-6 max-w-sm">
          <Label htmlFor="picture">Upload File</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="w-full gap-2 flex items-center mt-4">
          <Button variant={"outline"} className="" onClick={onBack}>
            Go back
          </Button>
          <Button variant={"default"} className="bg-primary ">
            Proceed
          </Button>
        </div>
      </div>
    </>
  );
};

export default BulkInviteEmployee;
