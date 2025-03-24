import React from 'react';
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import userImage from '../assets/userAsset/mypic.jpg'
import { FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb, SiLeetcode } from "react-icons/si";
import { AwsLogo } from '../assets/Svg';
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const Home = () => {
  return (
    <section
      id="home"
      className="py-24 xl:py-0 download-cv w-full overflow-x-hidden"
    >
      <motion.div
        className="flex flex-col items-center lg:h-screen justify-center lg:flex-row gap-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="text-center p-2 lg:text-left">
          <motion.h1
            className="text-black font-extrabold text-3xl lg:text-5xl xl:text-6xl"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span>Hi I'm Keshav <span className='text-title-rgba'>Kumar</span></span>
          </motion.h1>
          <motion.h2
            className="text-black text-xl lg:text-2xl xl:text-4xl font-bold mt-2"
          >
            <span className="typing">Fullstack Web Developer.</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-xs text-justify lg:text-sm font-semibold text-black md:w-[600px] lg:w-[400px] xl:w-[600px]"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Skilled in MongoDB, Express.js, React.js, and Node.js, I build robust and scalable solutions.
            I'm a Full Stack MERN Developer with a passion for creating dynamic, responsive web applications.
          </motion.p>
          <motion.div
            className="flex justify-center lg:justify-start items-center gap-5 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link to='contact' offset={-1} className='hire-me py-3 px-8 rounded-sm text-xs cursor-pointer text-white hover:scale-105 duration-300'>
              Hire Me
            </Link>
            <a
              href='https://drive.google.com/file/d/1x3JAVagOEKxxGTBTsgLE_uFHYICFxFqc/view?usp=drive_link'
              target='_blank'
              download
              className='download-cv text-black text-xs font-semibold rounded-sm flex items-center p-3 hover:scale-105 duration-300'
            >
              Download CV <FaDownload className='ml-3' />
            </a>
          </motion.div>
        </div>
        <div className="relative">
          <motion.div
            className="w-[300px] flex justify-center"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center items-center download-cv md:p-4 h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] rounded-full ring-container">
              <div className="bg-blue-50  rounded-full flex justify-center items-center h-[170px] w-[170px] lg:h-[270px] lg:w-[270px] image-holder">
                <img
                  src={userImage}
                  alt="Your Image"
                  className="rounded-full h-full w-full"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
            </div>



            <div className='icon w-26 h-10 md:w-36 md:h-10 lg:w-40 lg:h-14 flex items-center gap-2 justify-center px-2 rounded-sm absolute cursor-pointer top-10 -right-2 md:-right-16 xl:-right-28 z-10'>
              <motion.a
                href="https://github.com/keshav7662"
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-600  hover:text-gray-800 duration-200 border border-gray-400 hover:border-gray-800 rounded-full p-1'
                variants={iconVariants}
                initial='hidden'
                animate='visible'
                transition={{ delay: 1.5 }}
              >
                <FaGithub className='text-[18px] md:text-[24px] xl:text-[28px] hover:rotate-12 ' />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/keshavkumar7662/"
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-500 hover:-rotate-12 hover:text-blue-600 duration-200 border border-gray-400 hover:border-blue-500 rounded-full p-1'
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.7 }}
              >
                <FaLinkedin className='text-[18px] md:text-[24px] xl:text-[28px] hover:-rotate-12 ' />
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/Keshav_7662/"
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-500 hover:rotate-12 hover:text-amber-500 duration-200 border border-gray-400 hover:border-amber-500 rounded-full p-1'
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.9 }}
              >
                <SiLeetcode className='text-[18px] md:text-[24px] xl:text-[28px] hover:rotate-12  ' />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className='icon bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center p-2 absolute duration-200'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            <SiMongodb className='text-green-600 rounded-full w-full h-full' />
          </motion.div>
          <motion.div
            className='icon bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center p-2 absolute -top-8 right-0 duration-200'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            <AwsLogo className='text-black rounded-full w-full h-full' />
          </motion.div>
          <motion.div
            className='icon bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center p-2 absolute right-0 -bottom-5 duration-200'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6 }}
          >
            <RiNextjsFill className='text-black rounded-full w-full h-full' />
          </motion.div>
          <motion.div
            className='icon bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center p-2 absolute top-0 lg:-left-5 duration-200'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 }}
          >
            <FaReact className='text-sky-600 rounded-full w-full h-full' />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
