// import React from 'react'
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button"

// const Navbar = () => {
//     return (
//         <div className='bg-gray-900 '>
//             <header className="flex items-center justify-between h-24 px-40 shadow-sm text-gray-50">
//                 <div className="flex items-center gap-4">
//                     <Link to="#" className="flex items-center">
//                     <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-[#00b894] to-[#00d8d6] bg-clip-text">
//                         K
//                     </span>
//                         <span className="text-2xl font-bold">eshav Kumar</span>
//                     </Link>
//                 </div>
//                 <div className="hidden md:flex items-center gap-8">
//                 <Link to="#"  className="text-lg font-medium hover:underline underline-offset-4">
//                         Projects
//                     </Link>
//                     <Link to="#" className="text-lg font-medium hover:underline underline-offset-4">
//                         Skills
//                     </Link>
//                     <Link to="#" className="text-lg font-medium hover:underline underline-offset-4">
//                     Contact Me
//                     </Link>
//                 </div>
//             </header>

//         </div>
//     )
// }

// export default Navbar
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { IoLogoAmplify } from "react-icons/io5";
import { Button } from "@/components/ui/button"
const Navbar = () => {
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });

  return (
    <animated.header style={springProps} className="bg-white-rgba text-black-rgba p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
      <div className='flex items-center gap-2'>
        <IoLogoAmplify size={32}/>
        <h1 className="text-3xl font-bold">Keshav</h1>
      </div>
        
        <nav>
          <ul className="flex space-x-6 font-bold">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
        <div>
          <Button className='flex items-center gap-3'>
            Let's Chat
            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/speech-bubble-with-dots.png" alt="speech-bubble-with-dots" />
          </Button>
        </div>
      </div>
    </animated.header>
  );
};

export default Navbar;
