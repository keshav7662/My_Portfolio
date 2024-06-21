import React from 'react';
import { Html5, Css3, JavaScript, Tailwind, Figma, Aws, NextJs, NodeJs, MongoDB, Mui, Express, ReactJs } from '../assets/Svg';
import Marquee from 'react-fast-marquee';

const Skills = () => {

  const skillsData = [
    <Html5 />,
    <Css3 />,
    <JavaScript />,
    <Tailwind />,
    <Mui />,
    <MongoDB />,
    <Express />,
    <ReactJs />,
    <NodeJs />,
    <NextJs />,
    <Aws />,
    <Figma />
  ]
  return (
    <section id="skills">

      <h1 className='text-4xl md:text-6xl  text-center font-bold my-10'>Skill<span className='text-title-rgba'>s</span></h1>
    
        <Marquee
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          className='py-10'
         
        >
          {
            skillsData.map((skill, id) => (
              <div className="skills-container px-4 overflow-x-auto overflow-y-hidden no-scrollbar" >
                <div key={id} className='w-[80px] h-[80px] md:w-[150px] md:h-[150px] download-cv flex justify-center items-center rounded-sm p-2'>
                  {skill}
                </div>
              </div>
            ))
          }
        </Marquee>

     
    </section>
  );
};

export default Skills;
