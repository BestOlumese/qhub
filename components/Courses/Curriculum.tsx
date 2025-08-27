import React, { useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

interface CourseData {
  _id: string;
  title: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  duration: number;
  description: string;
  displayImageUrl: string;
  introVideoUrl: string;
}

interface ModuleData {
  _id: string;
  name: string;
  summary: string;
  course: CourseData;
  createdAt: string;
  updatedAt: string;
}

interface CurriculumProps {
  modulesData: ModuleData[];
}

const Curriculum = ({ modulesData }: CurriculumProps) => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  if (!modulesData || modulesData.length === 0) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        className="w-full text-center py-8"
      >
        <p className="text-gray-500">No modules available for this course yet.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 100,
      }}
      className="w-full"
    >
      {modulesData.map((module, index) => (
        <motion.div
          key={module._id}
          className="border border-gray-200 p-6 w-full my-4 rounded-md bg-white shadow-sm"
        >
          <div
            className="w-full flex justify-between cursor-pointer my-2 mb-6 text-lg font-semibold items-center hover:text-primary transition-colors"
            onClick={() => toggleOpen(index)}
          >
            <h2>Module {index + 1}: {module.name}</h2>
            <motion.span
              animate={{
                rotate: clickedIndex === index ? 90 : 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <FaAngleRight className="cursor-pointer" />
            </motion.span>
          </div>
          
          <AnimatePresence initial={false}>
            {clickedIndex === index && (
              <motion.div
                initial={{ maxHeight: 0, opacity: 0, overflow: "hidden" }}
                animate={{ maxHeight: 300, opacity: 1 }}
                exit={{ maxHeight: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-4">
                  <h3 className="font-medium text-gray-800 mb-2">Module Summary</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {module.summary || "No summary available for this module."}
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary w-8 h-8 cursor-pointer rounded-full flex items-center justify-center">
                          <IoPlayOutline className="text-white text-sm" />
                        </div>
                        <span className="text-sm font-medium">Start Module</span>
                      </div>
                      <span className="text-xs text-gray-500">
                        Created: {new Date(module.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
      
      {modulesData.length > 0 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Course Structure</h3>
          <p className="text-sm text-blue-700">
            This course contains {modulesData.length} module{modulesData.length !== 1 ? 's' : ''}. 
            Click on each module to view its content and summary.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default Curriculum;