import React from "react";
import ModuleBuilder from "./ModuleBuilder";
import { useMutation } from "@apollo/client";
import {
  ADD_COURSE_MODULE,
  EDIT_COURSE_MODULE,
  DELETE_COURSE_MODULE,
  ADD_LESSON, // Add this import
  EDIT_LESSON, // Add this import
  DELETE_LESSON, // Add this import
} from "@/lib/graphql";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Lesson } from "@/lib/types";

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
  const [addLesson] = useMutation(ADD_LESSON);
  const [editLesson] = useMutation(EDIT_LESSON);
  const [deleteLesson] = useMutation(DELETE_LESSON);

  const handleSubmit = async () => {
    console.log(modules, "Submitting modules for course:", courseId);

    try {
      // Create/update modules and their lessons
      for (const mod of modules) {
        let moduleId = mod._id;

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

          moduleId = data?.addCourseModule?._id;

          // Update local module ID
          if (moduleId) {
            setModules((prev) =>
              prev.map((m) =>
                m.id === mod.id ? { ...m, _id: moduleId } : m
              )
            );
          }
        }

        // Handle lessons for this module
        if (moduleId && mod.lessons?.length > 0) {
          await handleModuleLessons(mod.lessons, moduleId);
        }
      }

      onNext();
    } catch (error) {
      console.error("Module submission failed:", error);
      alert("Failed to submit modules");
    }
  };

  const handleModuleLessons = async (lessons: Lesson[], moduleId: string) => {
    for (const lesson of lessons) {
      try {
        if (lesson._id) {
          // Update existing lesson
          await editLesson({
            variables: {
              lessonInput: {
                _id: lesson._id,
                name: lesson.name,
                contentUrl: lesson.content,
                videoUrl: lesson.video || "",
                imageUrl: lesson.featuredImage || "",
                extraResourcesUrl: lesson.exerciseFiles?.join(",") || "",
                index: lesson.index || 0,
                moduleId,
              },
            },
          });
        } else {
          // Create new lesson
          const { data } = await addLesson({
            variables: {
              lessonInput: {
                name: lesson.name,
                contentUrl: lesson.content,
                videoUrl: lesson.video || "",
                imageUrl: lesson.featuredImage || "",
                extraResourcesUrl: lesson.exerciseFiles?.join(",") || "",
                index: lesson.index || 0,
                moduleId,
              },
            },
          });

          // Update local lesson with server ID
          if (data?.addLesson?._id) {
            setModules((prev) =>
              prev.map((m) => {
                if (m._id === moduleId || m.id === moduleId) {
                  return {
                    ...m,
                    lessons: m.lessons.map((l: Lesson) =>
                      l.id === lesson.id
                        ? { ...l, _id: data.addLesson._id }
                        : l
                    ),
                  };
                }
                return m;
              })
            );
          }
        }
      } catch (error) {
        console.error(`Failed to save lesson ${lesson.name}:`, error);
        throw error;
      }
    }
  };

  const handleDeleteModule = async (moduleId: string) => {
    try {
      const module = modules.find((m) => m.id === moduleId || m._id === moduleId);
      
      // Delete all lessons in the module first
      if (module?.lessons?.length > 0) {
        for (const lesson of module.lessons) {
          if (lesson._id) {
            await deleteLesson({
              variables: { lessonId: lesson._id },
            });
          }
        }
      }

      // Delete the module if it exists on server
      if (module?._id) {
        await deleteCourseModule({
          variables: { moduleId: module._id },
        });
      }

      // Remove from local state
      setModules((prev) => prev.filter((m) => m.id !== moduleId && m._id !== moduleId));
    } catch (error) {
      console.error("Module deletion failed:", error);
      alert("Failed to delete module");
    }
  };

  const handleDeleteLesson = async (lessonId: string, moduleId: string) => {
    try {
      const module = modules.find((m) => m.id === moduleId || m._id === moduleId);
      const lesson = module?.lessons?.find((l: Lesson) => l.id === lessonId || l._id === lessonId);

      // Delete from server if it has a server ID
      if (lesson?._id) {
        await deleteLesson({
          variables: { lessonId: lesson._id },
        });
      }

      // Remove from local state
      setModules((prev) =>
        prev.map((m) => {
          if (m.id === moduleId || m._id === moduleId) {
            return {
              ...m,
              lessons: m.lessons?.filter((l: Lesson) => l.id !== lessonId && l._id !== lessonId) || [],
            };
          }
          return m;
        })
      );
    } catch (error) {
      console.error("Lesson deletion failed:", error);
      alert("Failed to delete lesson");
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
        onDeleteLesson={handleDeleteLesson} // Pass lesson deletion handler
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