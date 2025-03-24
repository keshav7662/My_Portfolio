import React from 'react'
import { Button } from "@/components/ui/button";

const ProjectCard = ({ project, openPopup }) => (
    <div className="download-cv bg-gray-100 p-4 md:p-6 rounded-lg transition-transform transform hover:scale-95 duration-500 w-[320px] md:w-[350px] lg:w-[450px] xl:w-[550px] flex flex-col cursor-pointer">
      <div>
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
            Explore More
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
        Explore More
      </Button>
    </div>
  );

export default ProjectCard