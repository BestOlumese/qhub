import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React from "react";
const Step1UploadFile = ({ onNext }: { onNext: () => void }) => {
  return (
    <>
      <SheetHeader>
        <SheetTitle className=" px-6 border-b-2 pb-4">
          Upload Resource
        </SheetTitle>
        <SheetDescription className="px-6">
          Easily upload and share educational documents with your students or
          organization.
        </SheetDescription>
      </SheetHeader>
      <div className="mt-4 px-6">
        <div className="flex flex-col gap-2 mt-6 max-w-sm">
          <Label htmlFor="picture">Upload File</Label>
          <Input id="picture" type="file" accept=".pdf,.docx,.txt,.pptx" />
          <p className="text-xs text-gray-500">.pdf, .docx, .txt, .pptx</p>
        </div>
        <div className="flex mt-4">
          <Button className="bg-primary" onClick={onNext}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
export default Step1UploadFile;
