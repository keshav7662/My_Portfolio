import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Button } from "@/components/ui/button"
import { FaDownload } from "react-icons/fa";
const Home = () => {
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <animated.section id="home" style={springProps} className="h-screen  flex items-center bg-gradient-to-r from-blue-100 to-white text-white">
      <div className='flex justify-start -rotate-90 relative '>
        <div className="text-center text-blue-100 font-extrabold text-6xl absolute top-5 -right-36">
          <p className='side-text'>PORTFOLIO</p>
          {/* <p className='side-text'>DEVELOPER</p> */}
        </div>
      </div>
      <div className='ml-44'>
        <h1 className='text-black font-extrabold text-6xl'>Hi I'am Keshav <span className='text-title-rgba'>Kumar</span></h1>
        <h2 className='text-black text-4xl font-bold mt-2'>Fullstack Web Developer.</h2>
        <p className='mt-4 text-xs font-semibold text-black '>I'm a Full Stack MERN Developer with a passion for creating dynamic, responsive web applications.</p>
        <p className=' text-xs font-semibold text-black '> Skilled in MongoDB, Express.js, React, and Node.js, I build robust and scalable solutions.</p>
        <div className='flex items-center gap-3 mt-10'>
          <Button className='hire-me px-8 rounded-sm'>Hire Me</Button>
          <Button className='download-cv text-black text-xs font-semibold'>Download CV <FaDownload className='ml-3'/></Button>
        </div>
      </div>
    </animated.section>
  );
};

export default Home;
