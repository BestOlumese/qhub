import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import IntroVideoUpload from "./IntroVideoUpload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CourseInfoForm = () => {
  return (
    <div>
      <div className="grid gap-4">
        <Label htmlFor="title">Course Title</Label>
        <Input id="title" className="col-span-3" />
      </div>
      <div className="grid gap-4 mt-4">
        <Label htmlFor="description">Course Description</Label>
        <Textarea
          placeholder="Type your description here."
          id="description"
          rows={10}
        />
      </div>
      <div className="flex w-full mt-4 ">
        <div className="grid gap-4 w-[50%]">
          <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Estimated Course Duration
          </p>

          <div className="flex gap-4">
            <div>
              <Input id="duration-hrs" className="col-span-3" type="number" />
              <Label
                htmlFor="duration-hrs"
                className="mt-1 text-sm text-gray-400"
              >
                Hours
              </Label>
            </div>
            <div>
              <Input id="duration-mins" className="col-span-3" type="number" />
              <Label
                htmlFor="duration-mins"
                className="mt-1 text-sm text-gray-400"
              >
                Minutes
              </Label>
            </div>
          </div>
        </div>
        <div className="grid gap-4 w-[50%]">
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <IntroVideoUpload />
    </div>
  );
};

export default CourseInfoForm;
