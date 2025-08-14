import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { ADD_LMS_USER } from "@/lib/graphql";
import Cookies from "js-cookie";
import { useMutation } from "@apollo/client";
import { Loader2 } from "lucide-react";

const InviteEmployeeForm = ({ onBulkUpload }: { onBulkUpload: () => void }) => {
  const organizationId = Cookies.get("organizationId") || "";
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "lmsStudent",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [addLmsUser, { loading }] = useMutation(ADD_LMS_USER);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!student.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!student.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!student.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!student.role) newErrors.role = "Role is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    try {
      await addLmsUser({
        variables: {
          lmsUserInput: {
            ...student,
            organizationId,
          },
        },
      });
      toast.success("Employee invited successfully!");
      setStudent({ firstName: "", lastName: "", email: "", role: "lmsStudent" });
    } catch (err) {
      console.error(err);
      toast.error("Error inviting employee.");
    }
  };

  return (
    <>
      <SheetHeader>
        <SheetTitle className="border-b-2 px-6 pb-4">
          Invite Employee
        </SheetTitle>
        <SheetDescription className="px-6">
          Invite new employees to your organization.
        </SheetDescription>
      </SheetHeader>

      <div className="mt-4 px-6">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="w-full grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input
                type="text"
                id="first-name"
                value={student.firstName}
                onChange={(e) =>
                  setStudent((prev) => ({ ...prev, firstName: e.target.value }))
                }
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input
                type="text"
                id="last-name"
                value={student.lastName}
                onChange={(e) =>
                  setStudent((prev) => ({ ...prev, lastName: e.target.value }))
                }
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={student.email}
              onChange={(e) =>
                setStudent((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="role">Role</Label>
            <Select
              value={student.role}
              onValueChange={(value) =>
                setStudent((prev) => ({ ...prev, role: value }))
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lmsStudent">Student</SelectItem>
                <SelectItem value="organizationAdmin">Admin</SelectItem>
              </SelectContent>
            </Select>
            {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
          </div>

          <div className="flex">
            <Button type="submit" className="bg-primary" onClick={handleSubmit} disabled={loading}>
              {loading && <Loader2 className="animate-spin w-4 h-4" />}
              Invite Employee
            </Button>
          </div>
        </form>

        <p
          className="mt-4 text-sm text-primary underline cursor-pointer"
          onClick={onBulkUpload}
        >
          Bulk Upload Employee
        </p>
      </div>
    </>
  );
};

export default InviteEmployeeForm;
