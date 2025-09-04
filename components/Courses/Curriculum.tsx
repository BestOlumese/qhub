import React, { useState } from "react";
import { IoPlayOutline, IoDownloadOutline } from "react-icons/io5";
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
  const [playingVideo, setPlayingVideo] = useState<{
    url: string;
    lessonName: string;
    resources: string[];
  } | null>(null);

  const toggleOpen = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const parseResources = (resourcesUrl: string): string[] => {
    if (!resourcesUrl || resourcesUrl.trim() === "") return [];
    return resourcesUrl
      .split(",")
      .map(url => url.trim())
      .filter(url => url !== "");
  };

  const getFileName = (url: string): string => {
    try {
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;
      const fileName = pathname.substring(pathname.lastIndexOf("/") + 1);
      return fileName || "Download";
    } catch {
      return "Download";
    }
  };

  const handlePlayVideo = (videoUrl: string, lessonName: string, resourcesUrl: string) => {
    if (videoUrl) {
      const resources = parseResources(resourcesUrl);
      setPlayingVideo({
        url: videoUrl,
        lessonName,
        resources
      });
    } else {
      toast.error(`Video not available for ${lessonName}`);
    }
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
  };

  const downloadResource = (url: string, fileName: string) => {
    try {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success(`Downloading ${fileName}`);
    } catch (error) {
      console.error('Download failed:', error);
      toast.error('Download failed');
    }
  };

  if (!modulesData || modulesData.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="w-full text-center py-8"
      >
        <p className="text-gray-500">No modules available for this course yet.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
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
              animate={{ rotate: clickedIndex === index ? 90 : 0 }}
              transition={{ duration: 0.3 }}
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
                        .map((lesson) => {
                          const resources = parseResources(lesson.extraResourcesUrl);
                          return (
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
                                    {resources.length > 0 && (
                                      <div className="flex flex-wrap gap-1 mt-2">
                                        {resources.slice(0, 2).map((resourceUrl, idx) => (
                                          <button
                                            key={idx}
                                            onClick={() => downloadResource(resourceUrl, getFileName(resourceUrl))}
                                            className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors flex items-center gap-1"
                                          >
                                            <IoDownloadOutline className="w-3 h-3" />
                                            Resource {idx+1}
                                          </button>
                                        ))}
                                        {resources.length > 2 && (
                                          <span className="text-xs text-gray-500 px-2 py-1">
                                            +{resources.length - 2} more
                                          </span>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  {lesson.videoUrl ? (
                                    <button
                                      onClick={() => handlePlayVideo(lesson.videoUrl, lesson.name, lesson.extraResourcesUrl)}
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
                          );
                        })}
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
      ))}
      
      {/* Enhanced Video Player Modal */}
      {playingVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-5xl w-full mx-4 max-h-[95vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold truncate">{playingVideo.lessonName}</h3>
              <button
                onClick={handleCloseVideo}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                ×
              </button>
            </div>
            
            <div className="flex flex-col lg:flex-row">
              {/* Video Section */}
              <div className="flex-1 p-4">
                <video
                  src={playingVideo.url}
                  controls
                  autoPlay
                  className="w-full rounded-lg shadow-sm"
                  style={{ maxHeight: '60vh' }}
                  onError={() => {
                    toast.error("Error loading video");
                    setPlayingVideo(null);
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Resources Section */}
              {playingVideo.resources.length > 0 && (
                <div className="lg:w-80 border-t lg:border-t-0 lg:border-l border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <IoDownloadOutline className="w-4 h-4" />
                    Lesson Resources
                  </h4>
                  <div className="space-y-2">
                    {playingVideo.resources.map((resourceUrl, idx) => {
                      const fileName = getFileName(resourceUrl);
                      return (
                        <button
                          key={idx}
                          onClick={() => downloadResource(resourceUrl, fileName)}
                          className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-800 truncate">
                              Resource {idx+1}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Click to download
                            </p>
                          </div>
                          <IoDownloadOutline className="w-4 h-4 text-gray-400 group-hover:text-primary flex-shrink-0 ml-2" />
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs text-blue-700">
                      💡 Tip: Download resources before starting the lesson for the best learning experience.
                    </p>
                  </div>
                </div>
              )}
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