import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
const Step2ResourceInfo = ({ onBack }: { onBack: () => void }) => {
  return (
    <>
      <SheetHeader className="  ">
        <SheetTitle className=" px-6 border-b-2 pb-4">
          Resource Information
        </SheetTitle>
        <SheetDescription className="px-6">
          Input author, title, and description for your resource.
        </SheetDescription>
      </SheetHeader>
      <div className="mt-4 px-6">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="first-name" className="text-sm font-medium">
              Name
            </Label>
            <Input type="text" id="first-name" />
          </div>
          <div className="grid gap-4 ">
            <Label htmlFor="description">Description</Label>
            <Textarea
              placeholder="Type your description here."
              id="description"
              rows={4}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="first-name" className="text-sm font-medium">
              Author
            </Label>
            <Input type="text" id="first-name" />
          </div>
          <div className="grid gap-2 grid-cols-2 place-content-center ">
            <div className="flex flex-col gap-2">
              <Label>Estimated Duration</Label>
              <div className="flex gap-4">
                <div>
                  <Input
                    id="duration-hrs"
                    className="col-span-3"
                    type="number"
                  />
                  <Label
                    htmlFor="duration-hrs"
                    className="mt-1 text-xs text-gray-400"
                  >
                    Hrs
                  </Label>
                </div>
                <div>
                  <Input
                    id="duration-mins"
                    className="col-span-3"
                    type="number"
                  />
                  <Label
                    htmlFor="duration-mins"
                    className="mt-1 text-xs text-gray-400"
                  >
                    Mins
                  </Label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <Label htmlFor="role">File Type</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder=".pdf" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employee">.pdf</SelectItem>
                  <SelectItem value="pptx">.pptx</SelectItem>
                  <SelectItem value="txt">.txt</SelectItem>
                  <SelectItem value="admin">.docx</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="w-full gap-2 flex items-center">
            <Button variant={"outline"} className="" onClick={onBack}>
              Go back
            </Button>
            <Button variant={"default"} className="bg-primary ">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Step2ResourceInfo;
