import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import userImage from '../assets/userAsset/keshav1.png'
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { AwsLogo } from '../assets/Svg'

const Home = () => {
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <animated.section
      id="home"
      style={springProps}
      className="h-screen  download-cv "
    >

      {/* <div className="hidden xl:flex lg:items-center lg:justify-center text-center  font-extrabold text-2xl lg:text-6xl relative h-screen">
        <p className="side-text absolute left-0 top-1/2 transform -translate-y-1/2 rotate-90 text-2xl lg:text-6xl">
          PORTFOLIO
        </p>
      </div> */}


      <div className='flex flex-col items-center justify-center h-screen w-full lg:flex-row gap-12'>
        <div className='text-center p-2 lg:text-left'>
          <h1 className='text-black font-extrabold text-3xl lg:text-6xl'>
            <span className="">Hi I'm Keshav <span className='text-title-rgba'>Kumar</span></span>
          </h1>
          <h2 className='text-black text-xl lg:text-4xl font-bold mt-2'>
            <span className="typing">Fullstack Web Developer.</span>
          </h2>
          <p className='mt-4 text-xs xl:text-sm font-semibold text-black'>
            I'm a Full Stack MERN Developer with a passion for creating dynamic, responsive web applications.
          </p>
          <p className='text-xs xl:text-sm font-semibold text-black'>
            Skilled in MongoDB, Express.js, React.js, and Node.js, I build robust and scalable solutions.
          </p>
          <div className='flex justify-center lg:justify-start items-center gap-5 mt-10'>
            <Button className='hire-me px-8 rounded-sm'>
              Hire Me
            </Button>
            <Button className='download-cv text-black text-xs font-semibold rounded-sm '>
              Download CV <FaDownload className='ml-3' />
            </Button>
          </div>
        </div>
        <div className='relative'>
          <div className='w-[300px] flex justify-center'>
            <div className='flex justify-center items-center bg-white md:p-4 h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] rounded-full ring-container'>
              <div className='bg-blue-50 rounded-full flex justify-center items-center h-[170px] w-[170px] lg:h-[270px] lg:w-[270px] image-holder'>
                <img src={userImage} alt="Your Image" className='rounded-full' />
              </div>
            </div>
            <div className='icon w-28 h-10 md:w-36 md:h-10 lg:w-40 lg:h-14 flex items-center justify-around  rounded-sm absolute cursor-pointer top-10  -right-6 md:-right-16 lg:-right-28 z-10 '>
              <div className='text-gray-600 hover:scale-110 hover:rotate-12 duration-200 border border-gray-400 rounded-full p-1'>
                <FaGithub className='text-[20px] md:text-[24px] lg:text-[28px]' />
              </div>
              <div className='text-gray-600 hover:scale-110 hover:-rotate-12 duration-200 border border-gray-400 rounded-full p-1'>
                <FaLinkedin className='text-[20px] md:text-[24px] lg:text-[28px]' />
              </div>
              <div className='text-gray-600 hover:scale-110 hover:-rotate-12 duration-200 border border-gray-400 rounded-full p-1'>
                <SiLeetcode className='text-[20px] md:text-[24px] lg:text-[28px]' />
              </div>
            </div>

          </div>

          <div className='icon bg-blue-100 rounded-full  w-12 h-12 flex items-center justify-center p-2 hover:scale-110 absolute duration-200'>
            <SiMongodb className='text-green-600 rounded-full t w-full h-full' />
          </div>
          <div className='icon bg-blue-100 rounded-full  w-12 h-12 flex items-center justify-center p-2  absolute -top-8 right-0 hover:scale-110 duration-200'>
            <AwsLogo className='text-black rounded-full  w-full h-full ' />
          </div>
          <div className='icon bg-blue-100 rounded-full  w-12 h-12 flex items-center justify-center p-2 hover:scale-110 absolute right-0 -bottom-5 duration-200'>
            <RiNextjsFill className='text-black rounded-full w-full h-full' />
          </div>
          <div className='icon bg-blue-100 rounded-full  w-12 h-12 flex items-center justify-center p-2 hover:scale-110 absolute top-0 lg:-left-5 duration-200'>
            <FaReact className='text-sky-600 rounded-full w-full h-full' />
          </div>
          {/* <div className='icon bg-blue-100 rounded-full  w-12 h-12 flex items-center justify-center hover:scale-110 absolute -bottom-20 left-1/2 '>
            <SiMongodb  className='text-green-600 rounded-full text-[30px] md:text-[34px]' />
          </div> */}
        </div>
      </div>

    </animated.section>
  );
};

export default Home;
