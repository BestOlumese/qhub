import React from "react";
import ModuleBuilder from "./ModuleBuilder";
import { useMutation } from "@apollo/client";
import {
  ADD_COURSE_MODULE,
  EDIT_COURSE_MODULE,
  DELETE_COURSE_MODULE,
} from "@/lib/graphql";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface Step2ModuleBuilderProps {
  onNext: () => void;
  onPrevious: () => void;
  courseId: string;
  modules: any[];
  setModules: React.Dispatch<React.SetStateAction<any[]>>;
}

const Step2ModuleBuilder = ({
  onNext,
  onPrevious,
  courseId,
  modules,
  setModules,
}: Step2ModuleBuilderProps) => {
  const router = useRouter();
  const [addCourseModule] = useMutation(ADD_COURSE_MODULE);
  const [editCourseModule] = useMutation(EDIT_COURSE_MODULE);
  const [deleteCourseModule] = useMutation(DELETE_COURSE_MODULE);

  const handleSubmit = async () => {
    console.log(modules, "Submitting modules for course:", courseId);

    try {
      // Create/update modules
      for (const mod of modules) {
        if (mod._id) {
          // Update existing module
          await editCourseModule({
            variables: {
              editCourseModuleInput: {
                id: mod._id,
                courseId,
                name: mod.name,
                summary: mod.summary,
              },
            },
          });
        } else {
          // Create new module
          const { data } = await addCourseModule({
            variables: {
              courseModuleInput: {
                courseId,
                name: mod.name,
                summary: mod.summary,
              },
            },
          });

          // Update local ID
          if (data?.addCourseModule?._id) {
            setModules((prev) =>
              prev.map((m) =>
                m.id === mod.id ? { ...m, _id: data.addCourseModule._id } : m
              )
            );
          }
        }
      }

      onNext();
    } catch (error) {
      console.error("Module submission failed:", error);
      alert("Failed to submit modules");
    }
  };

  const handleDeleteModule = async (moduleId: string) => {
    try {
      await deleteCourseModule({
        variables: { moduleId },
      });
      setModules((prev) => prev.filter((m) => m.id !== moduleId));
    } catch (error) {
      console.error("Module deletion failed:", error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] relative">
      <div className="border-b border-b-gray-300 p-6">
        <h1 className="text-lg font-semibold">Module Creation</h1>
        <p className="text-sm text-gray-600">
          Add modules, lessons and quizzes to your course
        </p>
      </div>
      <ModuleBuilder
        modules={modules}
        setModules={setModules}
        courseId={courseId}
        onDeleteModule={handleDeleteModule}
      />
      <div className="flex !justify-between w-full flex-row absolute bottom-0 left-0 right-0 p-6 bg-white border-t">
        <Button variant="outline" onClick={onPrevious}>
          Back
        </Button>
        <Button
          className="bg-primary hover:bg-primary/90"
          onClick={handleSubmit}
        >
          Submit Course
        </Button>
      </div>
    </div>
  );
};

export default Step2ModuleBuilder;
