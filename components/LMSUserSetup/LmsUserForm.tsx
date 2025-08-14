"use client"

import React, { useState } from "react";
import LabelInputContainer from "@/components/ui/Form/LabelInputContainer";
import { Label } from "@/components/ui/Form/Label";
import { Input } from "@/components/ui/Form/Input";
import { useMutation } from "@apollo/client";
import { LMS_USER_ONBOARDING } from "@/lib/graphql";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const LMSUserForm = ({ token }: { token: string }) => {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [completeOnboarding, { loading }] = useMutation(LMS_USER_ONBOARDING);
  const router = useRouter();

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (!form.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required.";
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      await completeOnboarding({
        variables: {
          completeOnboardingDetails: {
            password: form.password,
            confirmPassword: form.confirmPassword,
            token,
          },
        },
      });
      toast.success("Onboarding complete!");
      setForm({ password: "", confirmPassword: "" });
      router.push("/login");
    } catch (err) {
      console.log(err);
      toast.error("Error completing onboarding.");
    }
  };

  return (
    <div>
      <LabelInputContainer className="my-4">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="********"
          type="password"
          value={form.password}
          onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </LabelInputContainer>

      <LabelInputContainer className="my-4">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          placeholder="********"
          type="password"
          value={form.confirmPassword}
          onChange={(e) =>
            setForm((p) => ({ ...p, confirmPassword: e.target.value }))
          }
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}
      </LabelInputContainer>

      <div className="flex justify-end">
        <button
          className="flex items-center gap-2 bg-primary rounded-md text-white p-2 px-4 md:px-6 mt-4 max-md:text-sm"
          type="button"
          onClick={handleSubmit}
          disabled={loading}
        >
            Submit
          {loading && <Loader2 className="animate-spin w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

export default LMSUserForm;
