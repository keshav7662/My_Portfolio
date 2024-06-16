import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { IoLogoAmplify } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { TiThMenu } from "react-icons/ti";
import { FiAlignRight } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });
  const [showNavDialog, setShowNavDialog] = useState(false);

  const handleMenu = () => {
    setShowNavDialog(!showNavDialog);
  };

  const handleRedirectHome = () => {
    window.location.hash = '#home';
  };

  return (
    <animated.header style={springProps} className=" ">
      <nav className='flex justify-between items-center bg-white-rgba text-black-rgba px-6 py-4 fixed w-full z-20'>
        <div className='flex items-center gap-2 cursor-pointer' onClick={handleRedirectHome}>
          <IoLogoAmplify size={32} />
          <h1 className="text-3xl font-bold hidden md:block">Keshav</h1>
        </div>
        <div className="hover-animate hidden lg:flex space-x-6 font-bold">
          <a href="#home" className="hover:text-pink-600">Home</a>
          <a href="#about" className="hover:text-pink-600">About</a>
          <a href="#projects" className="hover:text-pink-600">Projects</a>
          <a href="#skills" className="hover:text-pink-600">Skills</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a>
        </div>
        <div>
          <TiThMenu size={32} className='text-gray-900 lg:hidden' onClick={handleMenu} />
          <Button className='hidden lg:flex items-center gap-3'>
            Let's Chat
            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/speech-bubble-with-dots.png" alt="speech-bubble-with-dots" />
          </Button>
        </div>

        {/* sidebar */}
        <div className={`fixed bg-black text-white-rgba px-6 py-4 top-0  h-full z-30  w-[300px] duration-700 ease-out ${showNavDialog ? 'right-0' : 'right-[-100%]'}`}>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2 cursor-pointer' onClick={handleRedirectHome}>
              {/* <IoLogoAmplify size={32} /> */}
              {/* <h1 className="text-3xl font-bold">Keshav</h1> */}
            </div>
            <div>
              <RxCross2 size={32} className='text-white-rgba lg:hidden ' onClick={handleMenu} />
              <Button className='hidden lg:flex items-center gap-3 '>
                Let's Chat
                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/speech-bubble-with-dots.png" alt="speech-bubble-with-dots" />
              </Button>
            </div>
          </div>
          {/* <div className='border border-1 my-2'></div> */}
          <div className='flex flex-col space-y-6 font-bold'>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Work Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <div className='border border-1 my-5'></div>
          <Button className='flex items-center gap-3 w-full'>
            Let's Chat
            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/speech-bubble-with-dots.png" alt="speech-bubble-with-dots" />
          </Button>
        </div>
      </nav>
    </animated.header>
  );
};

export default Navbar;
