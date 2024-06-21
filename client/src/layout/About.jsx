import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { AboutMe, Ring } from '../assets/Svg';
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import Aos from 'aos';

const About = () => {

  Aos.init({
    duration: 1000
  });

  const [activeButton, setActiveButton] = useState('main-skills');
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 700 });

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const renderContent = () => {
    switch (activeButton) {
      case 'main-skills':
        return (
          <>
            <div className='flex gap-2'>
              <div className='h-3 mt-0.5'>
                <Ring className='h-full' />
              </div>
              <div>
                <h2 className='font-extrabold text-xs md:text-sm'>Software Development</h2>
                <p className='text-xs text-gray-700 my-1 font-semibold '>Creating reliable and efficient software solutions that meet user needs and business goals.</p>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='h-3 mt-0.5'>
                <Ring className='h-full' />
              </div>
              <div>
                <h2 className='font-extrabold text-xs Md:text-sm'>Web Development</h2>
                <p className='text-xs text-gray-700 my-1 font-semibold '>Building dynamic, responsive, and user-friendly web applications that provide seamless user experiences.</p>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='h-3 mt-0.5'>
                <Ring className='h-full' />
              </div>
              <div>
                <h2 className='font-extrabold text-xs md:text-sm'>Responsive Design</h2>
                <p className='text-xs text-gray-700 mt-1 font-semibold '>Ensuring web applications are fully responsive and adapt smoothly to various devices and screen sizes, enhancing accessibility and user engagement.</p>
              </div>
            </div>
          </>
        );
      case 'experience':
        return (
          <>
            <div className='flex gap-2'>
              <div className='h-3 mt-0.5'>
                <Ring className='h-full' />
              </div>
              <div>
                <h2 className='font-extrabold text-xs md:text-sm'>Software Development Engineer - 1</h2>
                <p className='text-sm text-gray-800 font-bold my-1'>
                  <span className=' text-title-rgba'>tailBoost.ai</span>
                  <span className='text-xs text-gray-500 ml-2 font-semibold'>Apr 2024 - Jun 2024</span>
                </p>
                <p className='text-xs text-gray-600 my-1 font-semibold'>Worked on integrating ad control functionalities into Shopify stores' post-checkout pages.</p>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='h-3 mt-0.5'><Ring className='h-full' /></div>
              <div>
                <h2 className='font-extrabold text-xs md:text-sm'>Fullstack Developer - Trainee</h2>
                <p className='text-sm text-gray-800 font-bold my-1'>
                  <span className=' text-title-rgba'>Cuvette</span>
                  <span className='text-xs text-gray-500 ml-2 font-semibold'>Aug 2023 - Jan 2024</span>
                </p>
                <p className='text-xs text-gray-600 my-1 font-semibold'>Built responsive interfaces with React.js and conducted unit testing.</p>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='h-3 mt-0.5'><Ring className='h-full' /></div>
              <div>
                <h2 className='font-extrabold text-xs md:text-sm'>Fullstack Developer - Intern</h2>
                <p className='text-sm text-gray-800 font-bold my-1'>
                  <span className='text-title-rgba'>Solitaire Infosys</span>
                  <span className='text-xs text-gray-500 ml-2 font-semibold'>Jan 2022 - Jun 2022</span>
                </p>
                <p className='text-xs text-gray-600 my-1 font-semibold'>Assisted in developing web applications and managing databases.</p>
              </div>
            </div>
          </>
        );
      case 'education':
        return (
          <>
            <div className='flex gap-2'>
              <div className='h-3 mt-0.5'>
                <Ring className='h-full' />
              </div>
              <div>
                <h2 className='font-extrabold text-xs md:text-sm'>Bachelor of Technology - <span className='text-xs text-gray-500 my-1 font-semibold '>2018-2022</span></h2>
                <p className='text-xs text-title-rgba my-1 font-semibold'>Chandigarh Group of Colleges, Mohali, Punjab.</p>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='h-3 mt-0.5'>
                <Ring className='h-full' />
              </div>
              <div>
                <h2 className='font-extrabold text-xs md:text-sm'>Senior Secondary School - XII - <span className='text-xs text-gray-500 my-1 font-semibold '>2016-2018</span></h2>
                <p className='text-xs text-title-rgba my-1 font-semibold'>K.T College, East Champaran, Bihar.</p>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='h-3 mt-0.5'>
                <Ring className='h-full' />
              </div>
              <div>
                <h2 className='font-extrabold text-xs md:text-sm'>Secondary School - X - <span className='text-xs text-gray-500 my-1 font-semibold '>2015</span></h2>
                <p className='text-xs text-title-rgba my-1 font-semibold'>Shantiniketan Jubilee School, East Champaran, Bihar.</p>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <animated.section id="about" style={springProps} className={'bg-[#E3EDF7 h-screen'}  >
      <h2 className='text-4xl md:text-6xl ml-5 md:ml-32 my-5 font-bold'>
        Who I <span className='text-title-rgba'>am</span>
      </h2>
      <div className="flex flex-col lg:flex-row" data-aos="fade-up" data-aos-duration="2000">
        <div className='w-full lg:max-w-[600px] bg-black px-6'>
          <AboutMe className="w-full lg:w-[500px]" />
        </div>
        <div className=' mx-auto text-left max-w-[330px] lg:max-w-[400px] flex flex-col'>
          <p className='text-sm text-black font-bold'>
            My name's Keshav. I'm a web <span className='text-title-rgba'>designer</span> and developer based in East Champaran.
          </p>
          <h1 className='text-black font-extrabold text-2xl md:text-3xl my-3'>
            <span>1+ Year's Experience in</span>
            <p className='font-extrabold text-2xl md:text-3xl mt-2'>
              Web <span className='text-title-rgba'>Development</span>.
            </p>
          </h1>
          <div className='flex justify-center lg:justify-start items-center gap-2 md:gap-5 my-5  px-2'>
            <Button
              className={`px-3 w-40 text-xs rounded-sm hover:scale-105 transform transition-transform duration-200 font-bold ${activeButton === 'main-skills' ? 'hire-me text-white duration-300' : 'download-cv text-black'}`}
              onClick={() => handleButtonClick('main-skills')}
            >
              Main Skills
            </Button>
            <Button
              className={`px-3 text-xs w-40 rounded-sm hover:scale-105 transform transition-transform duration-200 font-bold ${activeButton === 'experience' ? 'hire-me text-white' : 'download-cv text-black'}`}
              onClick={() => handleButtonClick('experience')}
            >
              Work Experience
            </Button>
            <Button
              className={`px-3 text-xs w-40 rounded-sm hover:scale-105 transform transition-transform duration-200 font-bold ${activeButton === 'education' ? 'hire-me text-white' : 'download-cv text-black'}`}
              onClick={() => handleButtonClick('education')}
            >
              Education
            </Button>
          </div>
          {/* Conditional content */}
          <div className=' flex flex-col overflow-y-auto'>
            {renderContent()}
          </div>
          {/* Conditional content */}
          <Button className='w-36 text-black bg-transparent border border-black rounded-sm text-xs font-bold ml-3 md:ml-0 hover:bg-black hover:text-white mt-auto'>
            Download CV <FaDownload className='ml-3' />
          </Button>
        </div>
      </div>
    </animated.section>
  );
};

export default About;
