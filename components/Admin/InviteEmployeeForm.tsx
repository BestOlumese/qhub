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
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
const InviteEmployeeForm = ({ onBulkUpload }: { onBulkUpload: () => void }) => {
  return (
    <>
      <SheetHeader>
        <SheetTitle>Invite New Employee</SheetTitle>
        <SheetDescription>
          Invite new employees to your organization.
        </SheetDescription>
      </SheetHeader>

      <div className="mt-4">
        <form className="flex flex-col gap-4">
          <div className="w-full grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="first-name" className="text-sm font-medium">
                First Name
              </Label>
              <Input type="text" id="first-name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="last-name" className="text-sm font-medium">
                Last Name
              </Label>
              <Input type="text" id="last-name" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="role">Role</Label>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Employee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="employee">Employee</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex">
            <Button className="bg-primary">Invite Employee</Button>
          </div>
        </form>
        <p
          className=" mt-4 text-sm text-primary underline cursor-pointer"
          onClick={onBulkUpload}
        >
          Bulk Upload Employee
        </p>
      </div>
    </>
  );
};

export default InviteEmployeeForm;
