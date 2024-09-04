import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Form/Input";
import { Label } from "@/components/ui/Form/Label";
import LabelInputContainer from "@/components/ui/Form/LabelInputContainer";
import { TextArea } from "@/components/ui/Form/TextArea";
import Star from "@/components/ui/Star";
import React from "react";

const FormBody = () => {
  return (
    <form action="" className="mt-6 md:mt-10">
      <div className="flex gap-3 md:gap-6">
        <LabelInputContainer>
          <Label htmlFor="name" className="text-xs">Name *</Label>
          <Input type="text" id="name" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email" className="text-xs">Email *</Label>
          <Input type="email" id="email" />
        </LabelInputContainer>
      </div>

      <h3 className="md:text-xl text-center m-3 md:m-4 font-semibold">Your rating</h3>
      <Star starCount={5} className="text-xl md:text-2xl mb-4" />
      <LabelInputContainer>
        <Label htmlFor="review" className="text-xs">Review *</Label>

        <TextArea id="review" />
      </LabelInputContainer>
      <div className="mt-4 flex justify-between">
        <div className="flex gap-2 text-sm items-center">
          <input type="checkbox" id="policy" />
          <label id="policy" className="text-xs">
            I accept the policy regarding writing reviews
          </label>
        </div>
        <div className="w-[200px]">
          <Button text="Submit" />
        </div>
      </div>
    </form>
  );
};

export default FormBody;
