import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Marquee from 'react-fast-marquee';
import { fullStackProjects, uiUxProjects } from '../layout/utils/ProjectsDescription';
import ProjectCard from './components/ProjectCard';
import ImagePopup from './components/ImagePopup';
import { FiExternalLink } from 'react-icons/fi';
import { Skeleton } from "@/components/ui/skeleton"

const Projects = () => {
  const [popupState, setPopupState] = useState({ images: [], index: null });
  const [selectedCategory, setSelectedCategory] = useState("fullstack");
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const projectsRef = useRef(null);

  const openPopup = (images, index) => setPopupState({ images, index });
  const closePopup = () => setPopupState({ images: [], index: null });
  useEffect(() => {
    if (selectedCategory === "uiux") {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    }
  }, [selectedCategory]);
  const prevImage = () => {
    setPopupState(prev => ({
      ...prev,
      index: prev.index > 0 ? prev.index - 1 : prev.index
    }));
  };

  const nextImage = () => {
    setPopupState(prev => ({
      ...prev,
      index: prev.index < prev.images.length - 1 ? prev.index + 1 : prev.index
    }));
  };

  const handleShowMore = () => {
    setShowMore(prev => !prev);
    if (showMore && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const visibleFullStackProjects = showMore ? fullStackProjects : fullStackProjects.slice(0, 4);


  return (
    <section id="projects" ref={projectsRef}>
      <h2 className='text-4xl md:text-6xl text-center font-bold my-8'>My Creative <span className='text-title-rgba'>Works</span></h2>

      {/* Category Toggle Buttons */}
      <div className="flex justify-center gap-4 my-6">
        <Button
          onClick={() => setSelectedCategory("fullstack")}
          className={`px-4 py-2 rounded-sm ${selectedCategory === "fullstack" ? "hire-me text-white" : "bg-gray-100 text-black hover:bg-gray-100"}`}
        >
          Code & Builds - FullStack
        </Button>
        <Button
          onClick={() => setSelectedCategory("uiux")}
          className={`px-4 py-2 rounded-sm ${selectedCategory === "uiux" ? "hire-me text-white" : "bg-gray-100 text-black hover:bg-gray-100"}`}
        >
          Design & Prototypes
        </Button>
      </div>

      {/* Full Stack Projects Section */}
      {selectedCategory === "fullstack" && (
        <>
          <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-8">
            {visibleFullStackProjects.map((project, index) => (
              <ProjectCard key={index} project={project} openPopup={openPopup} />
            ))}
          </div>
          {/* Load More Button */}
          {fullStackProjects.length > 4 && (
            <div className='flex justify-center mt-10'>
              <Button
                onClick={handleShowMore}
                className='download-cv bg-gray-100 text-black text-xs font-bold rounded-sm flex items-center'
                aria-label={showMore ? 'Show less projects' : 'Load more projects'}
              >
                {showMore ? 'Show Less' : 'Load More'}
              </Button>
            </div>
          )}
        </>
      )}

      {/* UI/UX Designs Section - Marquee */}
      {selectedCategory === "uiux" && (
        <section id="uiux-projects" className="w-full py-10">
          <div className="w-full">
            {loading ? (
              // Skeleton Loader when images are loading
              <div className="flex justify-center gap-4 animate-pulse">
                {[...Array(4)].map((_, index) => (
                  <Skeleton className="h-[200px] w-[300px] rounded-xl bg-gray-600" />
                ))}
              </div>
            ) : (
              <Marquee
                speed={150}
                pauseOnHover={true}
                gradient={false}
                className="py-6"
                direction='right'
              >
                {uiUxProjects.map((project, index) => (
                  <div
                    key={index}
                    className="w-[300px] h-[200px] mx-4 rounded-lg overflow-hidden relative group download-cv p-4"
                  >
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                      {/* Visit Live Link */}
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white text-md font-semibold bg-transparent border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-black hover:scale-105 hover:border-transparent flex items-center gap-2"
                      >
                        Visit Live <FiExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </Marquee>
            )}
          </div>
        </section>
      )}

      {/* Image Popup */}
      <ImagePopup
        images={popupState.images}
        currentIndex={popupState.index}
        onClose={closePopup}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  );
};

export default Projects;