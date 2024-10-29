import React, { useState, useEffect } from 'react';
import { AboutMe, Ring } from '../assets/Svg';
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";

const About = () => {
  const [activeButton, setActiveButton] = useState('experience');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const renderContent = () => {
    switch (activeButton) {
      case 'main-skills':
        return (
          <>
            {/* Skill 1: Software Development */}
            <div className='flex gap-3 items-start'>
              <Ring className='w-4 h-4 mt-1.5' />
              <div>
                <h2 className='font-extrabold text-sm md:text-base'>Software Development</h2>
                <p className='text-xs text-gray-600 my-2 font-medium leading-snug'>
                  Expertise in creating <span className='font-bold'>efficient, scalable, and reliable software solutions</span> that address business challenges. Proficient in <span className='font-bold'>Java</span>, <span className='font-bold'>Spring Boot</span>, and <span className='font-bold'>JUnit</span> for unit testing, with experience in implementing <span className='font-bold'>Agile methodologies</span> for continuous development and delivery.
                </p>
              </div>
            </div>

            {/* Skill 2: Web Development */}
            <div className='flex gap-3 items-start'>
              <Ring className='w-4 h-4 mt-1.5' />
              <div>
                <h2 className='font-extrabold text-sm md:text-base'>Web Development</h2>
                <p className='text-xs text-gray-600 my-2 font-medium leading-snug'>
                  Proficient in <span className='font-bold'>front-end and back-end development</span> using <span className='font-bold'>React.js</span>, <span className='font-bold'>Node.js</span>, and <span className='font-bold'>RESTful APIs</span> to create dynamic, data-driven applications. Adept at crafting <span className='font-bold'>responsive, user-centric interfaces</span> with <span className='font-bold'>HTML5, CSS3</span>, and <span className='font-bold'>JavaScript</span>.
                </p>
              </div>
            </div>

            {/* Skill 3: Responsive Design */}
            <div className='flex gap-3 items-start'>
              <Ring className='w-4 h-4 mt-1.5' />
              <div>
                <h2 className='font-extrabold text-sm md:text-base'>Responsive Design</h2>
                <p className='text-xs text-gray-600 my-2 font-medium leading-snug'>
                  Skilled in designing fully <span className='font-bold'>responsive web applications</span> that adapt seamlessly to different devices and screen sizes, ensuring <span className='font-bold'>optimal user experiences</span> across <span className='font-bold'>mobile, tablet, and desktop platforms</span> using frameworks like <span className='font-bold'>Tailwind CSS</span> and <span className='font-bold'>Bootstrap</span>.
                </p>
              </div>
            </div>
          </>

        );
      case 'experience':
        return (
          <>
            {/* Experience 1 */}
            <div className='flex gap-3 items-start'>
              <Ring className='w-4 h-4 mt-1.5' />
              <div>
                <h2 className='font-extrabold text-sm md:text-base'>Associate Software Engineer</h2>
                <div className='flex items-center text-sm text-gray-800 font-bold my-1'>
                  <span className='text-title-rgba'>Mphasis Ltd.</span>
                  <span className='text-xs text-gray-500 ml-3 font-semibold'>Jun 2023 - Oct 2024</span>
                </div>
                <p className='text-xs text-gray-600 my-2 font-medium leading-snug'>
                  Developed and maintained <span className='font-bold'>responsive React.js interfaces</span> and collaborated on unit testing using <span className='font-bold'>JUnit</span>.
                  Played a key role in enhancing user experience and performance optimizations.
                </p>
              </div>
            </div>

            {/* Experience 2 */}
            <div className='flex gap-3 items-start'>
              <Ring className='w-4 h-4 mt-1.5' />
              <div>
                <h2 className='font-extrabold text-sm md:text-base'>Software Development Engineer - 1</h2>
                <div className='flex items-center text-sm text-gray-800 font-bold my-1'>
                  <span className='text-title-rgba'>tailBoost.ai <i className='text-gray-500'>(now ShopLinks)</i></span>
                  <span className='text-xs text-gray-500 ml-3 font-semibold'>Apr 2024 - May 2024</span>
                </div>
                <p className='text-xs text-gray-600 my-2 font-medium leading-snug'>
                  Led the integration of <span className='font-bold'>ad control functionalities</span> into Shopify stores' post-checkout pages, improving post-purchase engagement and monetization for clients.
                </p>
              </div>
            </div>

            {/* Experience 3 */}
            <div className='flex gap-3 items-start'>
              <Ring className='w-4 h-4 mt-1.5' />
              <div>
                <h2 className='font-extrabold text-sm md:text-base'>Fullstack Developer - Intern</h2>
                <div className='flex items-center text-sm text-gray-800 font-bold my-1'>
                  <span className='text-title-rgba'>Solitaire Infosys</span>
                  <span className='text-xs text-gray-500 ml-3 font-semibold'>Jan 2022 - Jun 2022</span>
                </div>
                <p className='text-xs text-gray-600 my-2 font-medium leading-snug'>
                  Contributed to the development of <span className='font-bold'>web applications</span> and managed database operations using <span className='font-bold'>MySQL</span>.
                  Assisted in backend integration using <span className='font-bold'>Node.js</span>.
                </p>
              </div>
            </div>
          </>

        );
      case 'education':
        return (
          <>
            {/* Bachelor's Degree */}
            <div className='flex gap-3 items-start'>
              <Ring className='w-4 h-4 mt-1.5' />
              <div>
                <h2 className='font-extrabold text-sm md:text-base'>
                  Bachelor of Technology (B.Tech)
                  <span className='text-xs text-gray-500 font-semibold ml-3'>2018 - 2022</span>
                </h2>
                <p className='text-xs text-gray-600 my-2 font-medium'>
                  <span className='font-bold'>Chandigarh Group of Colleges</span>, Mohali, Punjab
                </p>
                <p className='text-xs text-gray-600 my-1'>
                  Relevant courses: <span className='font-semibold'>Data Structures, Algorithms, Software Engineering, Web Development</span>.
                </p>
              </div>
            </div>

            {/* High School */}
            <div className='flex gap-3 items-start'>
              <Ring className='w-4 h-4 mt-1.5' />
              <div>
                <h2 className='font-extrabold text-sm md:text-base'>
                  Senior Secondary School - XII
                  <span className='text-xs text-gray-500 font-semibold ml-3'>2016 - 2018</span>
                </h2>
                <p className='text-xs text-gray-600 my-2 font-medium'>
                  <span className='font-bold'>K.T College</span>, East Champaran, Bihar
                </p>
                <p className='text-xs text-gray-600 my-1'>
                  Majored in Science (Physics, Chemistry, Mathematics).
                </p>
              </div>
            </div>

            {/* Secondary School */}
            <div className='flex gap-3 items-start'>
              <Ring className='w-4 h-4 mt-1.5' />
              <div>
                <h2 className='font-extrabold text-sm md:text-base'>
                  Secondary School - X
                  <span className='text-xs text-gray-500 font-semibold ml-3'>2015</span>
                </h2>
                <p className='text-xs text-gray-600 my-2 font-medium'>
                  <span className='font-bold'>Shantiniketan Jubilee School</span>, East Champaran, Bihar
                </p>
              </div>
            </div>
          </>

        );
      default:
        return null;
    }
  };

  return (
    <section id="about">
      <h2 className='text-4xl md:text-6xl ml-5 md:ml-32 my-5 font-bold'>
        Who I <span className='text-title-rgba'>am</span>
      </h2>
      <div className="flex flex-col lg:flex-row ">
        <div className='w-full flex justify-center px-6'>
          <AboutMe className="w-full xl:w-[500px]" />
        </div>
        <div className='w-full mx-auto flex '>
          <div className='mx-auto text-left w-full md:w-auto px-3 '>
            <p className='text-sm text-black font-bold'>
              My name's Keshav. I'm a web <span className='text-title-rgba'>designer</span> and developer based in East Champaran.
            </p>
            <h1 className='text-black   font-extrabold text-2xl md:text-3xl my-3'>
              <span>1+ Year's Experience in</span>
              <p className='font-extrabold text-2xl md:text-3xl mt-2'>
                Web <span className='text-title-rgba'>Development</span>.
              </p>
            </h1>
            <div className='flex flex-col min-h-[400px]'>
              <div className='flex  items-center gap-2 md:gap-5 my-5 px-2'>
                <Button
                  className={`px-3 w-36 text-xs rounded-sm hover:scale-105 transform transition-transform duration-200 font-bold ${activeButton === 'main-skills' ? 'hire-me text-white duration-300' : 'download-cv text-black'}`}
                  onClick={() => handleButtonClick('main-skills')}
                >
                  Main Skills
                </Button>
                <Button
                  className={`px-3 text-xs w-36 rounded-sm hover:scale-105 transform transition-transform duration-200 font-bold ${activeButton === 'experience' ? 'hire-me text-white' : 'download-cv text-black'}`}
                  onClick={() => handleButtonClick('experience')}
                >
                  Work Experience
                </Button>
                <Button
                  className={`px-3 text-xs w-36 rounded-sm hover:scale-105 transform transition-transform duration-200 font-bold ${activeButton === 'education' ? 'hire-me text-white' : 'download-cv text-black'}`}
                  onClick={() => handleButtonClick('education')}
                >
                  Education
                </Button>
              </div>
              {/* Content area */}
              <div className='max-w-[500px]  overflow-y-auto'>
                {renderContent()}
              </div>
              {/* Fixed button */}
              <div className='mt-auto py-5'>
                <Button className='w-36 text-black bg-transparent border border-black rounded-sm text-xs font-bold hover:bg-black hover:text-white'>
                  <a
                    href='https://drive.google.com/file/d/1x3JAVagOEKxxGTBTsgLE_uFHYICFxFqc/view?usp=drive_link'
                    target='_blank'
                    download
                    className="flex items-center justify-center"
                  >
                    Download CV <FaDownload className='ml-2' />
                  </a>
                </Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
