import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Quiz } from "@/lib/types";

const Step1QuizInfo = ({
  onNext,
  onChange,
  quiz,
}: {
  onNext: () => void;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  quiz: Quiz;
}) => {
  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="name">Quiz Title</Label>
        <Input
          id="name"
          className="col-span-3"
          onChange={onChange}
          value={quiz.name}
        />
      </div>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="name">Quiz Summary</Label>
        <Textarea
          placeholder="Type summary here."
          id="summary"
          rows={4}
          onChange={onChange}
          value={quiz.summary}
        />
      </div>
      <div className="flex justify-end mt-4 ">
        <Button className="bg-primary hover:bg-primary/90" onClick={onNext}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Step1QuizInfo;
