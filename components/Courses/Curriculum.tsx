import React, { useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";

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

interface LessonData {
  _id: string;
  contentUrl: string;
  createdAt: string;
  extraResourcesUrl: string;
  imageUrl: string;
  index: number;
  name: string;
  updatedAt: string;
  videoUrl: string;
}

interface ModuleData {
  _id: string;
  name: string;
  summary: string;
  course: CourseData;
  lessons: LessonData[];
  createdAt: string;
  updatedAt: string;
}

interface CurriculumProps {
  modulesData: ModuleData[];
}

const Curriculum = ({ modulesData }: CurriculumProps) => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const toggleOpen = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const handlePlayVideo = (videoUrl: string, lessonName: string) => {
    if (videoUrl) {
      setPlayingVideo(videoUrl);
    } else {
      toast.error(`Video not available for ${lessonName}`);
    }
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
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
                  
                  {module.lessons && module.lessons.length > 0 ? (
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-800 text-sm">Lessons ({module.lessons.length})</h4>
                      {[...module.lessons]
                        .sort((a, b) => a.index - b.index)
                        .map((lesson) => (
                        <div
                          key={lesson._id}
                          className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 flex-1">
                              <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center text-xs font-medium">
                                {lesson.index}
                              </div>
                              <div className="flex-1">
                                <h5 className="font-medium text-gray-800 text-sm">{lesson.name}</h5>
                                <p className="text-xs text-gray-500 mt-1">
                                  {new Date(lesson.createdAt).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {lesson.extraResourcesUrl && (
                                <a
                                  href={lesson.extraResourcesUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                                >
                                  Resources
                                </a>
                              )}
                              {lesson.videoUrl ? (
                                <button
                                  onClick={() => handlePlayVideo(lesson.videoUrl, lesson.name)}
                                  className="bg-primary w-8 h-8 cursor-pointer rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                                >
                                  <IoPlayOutline className="text-white text-sm" />
                                </button>
                              ) : (
                                <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                                  <IoPlayOutline className="text-gray-500 text-sm" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <span className="text-gray-500 text-sm">No lessons available for this module yet.</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )      )}
      
      {/* Video Player Modal */}
      {playingVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Lesson Video</h3>
              <button
                onClick={handleCloseVideo}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="relative w-full">
              <video
                src={playingVideo}
                controls
                autoPlay
                className="w-full max-h-[60vh] rounded"
                onError={() => {
                  toast.error("Error loading video");
                  setPlayingVideo(null);
                }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
      
      {modulesData.length > 0 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Course Structure</h3>
          <p className="text-sm text-blue-700">
            This course contains {modulesData.length} module{modulesData.length !== 1 ? 's' : ''} with{' '}
            {modulesData.reduce((total, module) => total + (module.lessons?.length || 0), 0)} total lessons.
            Click on each module to view lessons and start learning.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default Curriculum;