import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Form/Input";
import { Label } from "@/components/ui/Form/Label";
import LabelInputContainer from "@/components/ui/Form/LabelInputContainer";
import { TextArea } from "@/components/ui/Form/TextArea";
import Star from "@/components/ui/Star";
import React from "react";

const FormBody = () => {
  return (
    <form action="" className="mt-10">
      <div className="flex gap-6">
        <LabelInputContainer>
          <Label htmlFor="name">Name *</Label>
          <Input type="text" id="name" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email">Email *</Label>
          <Input type="email" id="email" />
        </LabelInputContainer>
      </div>

      <h3 className="text-2xl text-center mt-8 mb-4">Your rating</h3>
      <Star starCount={5} className="text-2xl mb-4" />
      <LabelInputContainer>
        <Label htmlFor="review">Review *</Label>

        <TextArea id="review" />
      </LabelInputContainer>
      <div className="mt-4 flex justify-between">
        <div className="flex gap-2 text-sm items-center">
          <input type="checkbox" id="policy" />
          <label id="policy">
            I accept the policy regarding writing reviews
          </label>
        </div>
        <div className="w-[250px]">
          <Button text="Submit" />
        </div>
      </div>
    </form>
  );
};

export default FormBody;
