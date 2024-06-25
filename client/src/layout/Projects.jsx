import React, { useState, useRef } from 'react';
import { ChemicalIcon, AddIcon, UpIcon } from '../assets/Svg';
import { Button } from "@/components/ui/button";
import Quizzie from '../assets/projects/Quizzie.png';
import Quizzie2 from '../assets/projects/Quizzie2.png';
import HireZoom1 from '../assets/projects/Hz1.png';
import HireZoom2 from '../assets/projects/Hz2.png';
import HireZoom3 from '../assets/projects/Hz3.png';
import Viz from '../assets/projects/vizvista.png';
import Notes1 from '../assets/projects/Notes1.png';
import Notes2 from '../assets/projects/Notes2.png';
import Notes3 from '../assets/projects/Notes3.png';
import Portfolio1 from '../assets/projects/portfolio1.png';
import Portfolio2 from '../assets/projects/portfolio2.png';
import CreditCard from '../assets/projects/creditCard.png';
import CreditCard2 from '../assets/projects/creditCard2.png';

// Popup Component
const ImagePopup = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-black p-10 rounded-lg max-w-3xl max-h-[80vh] overflow-auto">
        <button
          className="absolute top-2 right-2 rounded-sm text-white hover:bg-red-700 px-3"
          onClick={onClose}
          aria-label="Close popup"
        >
          Close
        </button>
        <img src={images[currentIndex]} alt="Popup" className="max-w-full max-h-full rounded-lg" />
        <button
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={currentIndex > 0 ? onPrev : null}
          disabled={currentIndex === 0}
          aria-label="Previous image"
        >
          {'<'}
        </button>
        <button
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full ${currentIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={currentIndex < images.length - 1 ? onNext : null}
          disabled={currentIndex === images.length - 1}
          aria-label="Next image"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [popupState, setPopupState] = useState({ images: [], index: null });
  const [showMore, setShowMore] = useState(false);
  const projectsRef = useRef(null);

  const openPopup = (images, index) => setPopupState({ images, index });

  const closePopup = () => setPopupState({ images: [], index: null });

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

  const projects = [
    {
      title: "Quizzie",
      description: "Quizzie is a multi-format quiz-based full-stack application built using the MERN stack. It offers a variety of quiz formats and a seamless user experience.",
      images: [Quizzie, Quizzie2],
      link: "https://quizzie-seven.vercel.app/"
    },
    {
      title: "HireZoom",
      description: "HireZoom is a job listing platform where recruiters can post jobs and job seekers can find their perfect match. It's designed to simplify the hiring process for both parties.",
      images: [HireZoom1, HireZoom3],
      link: "https://hire-zoom.vercel.app/all-jobs"
    },
    {
      title: "Credit-Card Generator",
      description: "A beautiful UI to generate a credit card by filling out necessary details. The data gets loaded to the UI of the credit card, creating a visually appealing interface.",
      images: [CreditCard, CreditCard2],
      link: "https://credit-card-generator-xdab.vercel.app/"
    },
    {
      title: "My Portfolio",
      description: "This is my personal portfolio website built using the MERN stack. It features cool JavaScript libraries for a visually appealing interface and includes features like responsiveness and live chat.",
      images: [Portfolio1, Portfolio2],
      link: "https://keshavkumar.vercel.app/"
    },
    {
      title: "Pocket Notes",
      description: "Pocket Notes is a note-taking app where users can manage their notes, customize note cards, and ensure data persistence. It's designed for efficiency and ease of use.",
      images: [Notes1, Notes3],
      link: "https://notestakingapp.vercel.app/"
    },
    {
      title: "Viz-Vista",
      description: "Viz-Vista is a cutting-edge data visualization tool that transforms complex data into interactive visual insights, making data analysis more intuitive and engaging.",
      images: [Viz],
      link: "https://sales-performance-gamma.vercel.app/"
    }
  ];


  const visibleProjects = showMore ? projects : projects.slice(0, 4);

  return (
    <section id="projects"  ref={projectsRef}>

        <h2 className='text-4xl md:text-6xl text-center font-bold my-8'>My Creative <span className='text-title-rgba'>Works</span></h2>
        <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-8" >
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="download-cv bg-gray-100 p-4 md:p-6 rounded-lg transition-transform transform hover:scale-95 duration-500 w-[320px] md:w-[350px] lg:w-[450px] xl:w-[550px] flex flex-col cursor-pointer" 

            >
              <div >
                <div className='chemical-icon bg-[#E3EDF7] inline-block text-center rounded-lg px-2 py-1 border-inherit'>
                  <h3 className="text-2xl text-gray-600 font-bold">{project.title}</h3>
                </div>
              </div>
              <div className='flex flex-col my-4 md:flex-row gap-3 md:gap-5'>
                <div className='flex flex-col'>
                  <p className="text-sm">{project.description}</p>
                  <Button className='download-cv w-32 bg-gray-100 text-black text-xs font-bold rounded-sm hidden md:flex items-center mt-auto'
                    onClick={() => window.open(project.link, "_blank")}

                  >
                    Explore More <AddIcon className='ml-2 w-4 h-4' />
                  </Button>
                </div>
                <div className='flex flex-col justify-center rounded-md gap-[10px] min-h-[250px]'>
                  {project.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt=""
                      className='md:w-[1200px] h-[120px] object-contain cursor-pointer rounded-sm md:hover:scale-110 duration-500'
                      onClick={(e) => {
                        e.stopPropagation();
                        openPopup(project.images, imgIndex);
                      }}
                    />
                  ))}
                </div>
              </div>
              <Button className='download-cv w-32 md:hidden bg-gray-100 text-black text-xs font-bold rounded-sm flex items-center mt-auto' 
                onClick={() => window.open(project.link, "_blank")}
              >
                Explore More <AddIcon className='ml-2 w-4 h-4' />
              </Button>
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-10'>
          <Button
            onClick={handleShowMore}
            className='download-cv bg-gray-100 text-black text-xs font-bold rounded-sm flex items-center'
            aria-label={showMore ? 'Show less projects' : 'Load more projects'}
          >
            {showMore ? 'Show Less' : 'Load More'}
            {showMore ? <UpIcon className='ml-2 w-4 h-4' /> : <AddIcon className='ml-2 w-4 h-4' />}
          </Button>
        </div>

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
