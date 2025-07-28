"use client";
import React, { useState } from "react";
import Step1CourseInfo from "./Step1CourseInfo";
import Step2ModuleBuilder from "./Step2ModuleBuilder";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { useMutation } from "@apollo/client";
import { ADD_COURSE } from "@/lib/graphql";
// import { useOrganization } from "@/context/OrganizationContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const steps = [
  {
    label: "Course Information",
  },
  {
    label: "Module Creation",
  },
];

const CourseBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [courseId, setCourseId] = useState<string | null>(null);
  const [courseInput, setCourseInput] = useState({
    title: "",
    description: "",
    durationHours: "",
    durationMinutes: "",
    category: "",
    introVideoUrl: "",
    displayImageUrl: "",
  });
  const [modules, setModules] = useState<any[]>([]);
  const [addCourse] = useMutation(ADD_COURSE);
  const organizationId = Cookies.get("organizationId") || "";
  // const { currentOrganization } = useOrganization();
  const router = useRouter();

  const handleNextStep = async () => {
    // Validate required fields
    if (
      !courseInput.title ||
      !courseInput.description ||
      !courseInput.durationHours ||
      !courseInput.durationMinutes ||
      !courseInput.category
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const duration = `${courseInput.durationHours}h ${courseInput.durationMinutes}m`;
      const { data } = await addCourse({
        variables: {
          courseInput: {
            title: courseInput.title,
            description: courseInput.description,
            duration,
            category: courseInput.category,
            introVideoUrl: courseInput.introVideoUrl,
            displayImageUrl: courseInput.displayImageUrl,
            organizationId: organizationId,
          },
        },
      });

      console.log("Course created:", data);
      if (data?.addCourse?._id) {
        setCourseId(data.addCourse._id);
        setCurrentStep(2);
        toast.success("Course created successfully!");
      } else {
        toast.error("Failed to create course");
      }
    } catch (error) {
      console.error("Course creation failed:", error);
      toast.error("Failed to create course");
    }
  };

  const handlePrevStep = () => setCurrentStep(1);
  const handleStepClick = (index: number) => {
    if (index === 1) {
      setCurrentStep(1);
    } else if (index === 2 && courseId) {
      setCurrentStep(2);
    }
  };

  const handleSubmitCourse = () => {
    // This would be handled in Step2ModuleBuilder
    router.push("/courses");
    toast.success("Course published successfully!");
  };

  return (
    <>
      <div className="flex gap-4 items-center my-2">
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => handleStepClick(index + 1)}
            className={`flex items-center gap-2 text-sm max-md:text-xs cursor-pointer ${
              index + 1 < currentStep ? "text-primary" : "text-gray-500"
            }`}
          >
            {index + 1 < currentStep ? (
              <IconCircleCheckFilled className="w-5 h-5 text-primary" />
            ) : (
              <span
                className={`w-5 h-5 flex items-center justify-center rounded-full ${
                  index + 1 === currentStep
                    ? "bg-primary text-white"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </span>
            )}
            <span
              className={`${
                index + 1 <= currentStep ? "font-semibold" : "font-normal"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full mt-4 min-h-[calc(100vh-200px)] bg-white rounded-md  border border-gray-300">
        {currentStep === 1 && (
          <Step1CourseInfo
            onNext={handleNextStep}
            courseInput={courseInput}
            setCourseInput={setCourseInput}
          />
        )}
        {currentStep === 2 && courseId && (
          <Step2ModuleBuilder
            onPrevious={handlePrevStep}
            onNext={handleSubmitCourse}
            courseId={courseId}
            modules={modules}
            setModules={setModules}
          />
        )}
      </div>
    </>
  );
};

export default CourseBuilder;
