import React, { useState } from "react";
import { modules } from "@/lib/data";
import { IoPlayOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Curriculum = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

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
      {modules.map((module, index) => (
        <motion.div
          key={index}
          className={`p-8 w-full my-4 rounded-md`}
        >
          <div
            className="w-full flex justify-between cursor-pointer my-2 mb-6 text-xl font-bold items-center"
            onClick={() => toggleOpen(index)}
          >
            <h2>{module.name}</h2>
            <motion.span
              animate={{
                rotate: clickedIndex === index ? 90 : 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <FaAngleRight className="cursor-pointer" />
            </motion.span>
          </div>
          <AnimatePresence initial={false}>
            {clickedIndex === index && (
              <motion.div
                initial={{ maxHeight: 0, opacity: 0, overflow: "hidden" }}
                animate={{ maxHeight: 500, opacity: 1 }}
                exit={{ maxHeight: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                {module.lessons.map((lesson, i) => (
                  <div
                    key={i}
                    className="border-b border-b-[#333]/10 md:my-4 my-2 py-2 md:py-4 md:pb-8 w-full flex justify-between items-center"
                  >
                    <p className="text-gray-500 w-[90%]">{lesson.content}</p>
                    <div className="bg-black w-6 h-6 cursor-pointer rounded-full flex items-center justify-center">
                      <IoPlayOutline className="text-white" />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Curriculum;
