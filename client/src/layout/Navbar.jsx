import React, { useState, useEffect } from 'react';
import { IoLogoAmplify } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { TiThMenu } from "react-icons/ti";
import { FiAlignRight } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { DarkMode } from '../assets/Svg'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [showNavDialog, setShowNavDialog] = useState(false);

  useEffect(() => {
    if (showNavDialog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showNavDialog]);

  const handleMenu = () => {
    setShowNavDialog(!showNavDialog);
  };

  const handleRedirectHome = () => {
    window.location.hash = '#home';
    setShowNavDialog(false);
  };

  const handleLinkClick = (address) => {
    window.location.hash = address;
    setShowNavDialog(false);
  };

  const links = [
    {
      link: 'Home',
      address: 'home'
    },
    {
      link: 'About',
      address: 'about'
    },
    {
      link: 'Services',
      address: 'services'
    },
    {
      link: 'Projects',
      address: 'projects'
    },
    {
      link: 'Skills',
      address: 'skills'
    },
    {
      link: 'Contact',
      address: 'contact'
    }
  ];

  return (
    <navbar className={'fixed top-0 w-full z-20'}>
      <nav className='flex justify-between items-center bg-white-rgba text-black-rgba px-6  py-4 '>
        <a href='#home' className='flex items-center gap-2 cursor-pointer' onClick={handleRedirectHome}>
          <IoLogoAmplify size={32} />
          <h1 className="text-3xl font-bold hidden md:block">Keshav</h1>
        </a>
        <div className="hover-animate hidden lg:flex space-x-6 font-bold">
          {
            links.map((link, i) => (
              <Link
                to={link.address}
                offset={-80}
                className='cursor-pointer'
              >
                {link.link}
              </Link>
            ))
          }
        </div>
        {/* <DarkMode className='h-10 '/> */}

        <div>
          <TiThMenu size={32} className='text-gray-900 lg:hidden' onClick={handleMenu} />
          <Button className='hidden lg:flex items-center gap-3'>
            Let's Chat
            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/speech-bubble-with-dots.png" alt="speech-bubble-with-dots" />
          </Button>
        </div>

        {/* sidebar */}
        <div className={`fixed  bg-black text-white-rgba px-6 py-4 top-0 bottom-0 h-screen z-30 w-[300px] duration-500 ease-out ${showNavDialog ? 'right-0' : 'right-[-100%]'}`}>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2 cursor-pointer' onClick={handleRedirectHome}>
              {/* <IoLogoAmplify size={32} />
              <h1 className="text-3xl font-bold">Keshav</h1> */}
            </div>
            <div>
              <RxCross2 size={32} className='text-white-rgba lg:hidden' onClick={handleMenu} />
              <Button className='hidden lg:flex items-center gap-3'>
                Let's Chat
                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/speech-bubble-with-dots.png" alt="speech-bubble-with-dots" />
              </Button>
            </div>
          </div>
          <div className='flex flex-col space-y-6 font-bold'>
            {
              links.map((link, i) => (
                <Link
                  to={link.address}
                  offset={-80}
                  smooth={true}
                  duration={2000}
                  onClick={() => handleLinkClick(link.address)}
                  style={{ transitionDelay: `${i + 3}00ms` }}
                  className={`duration-500 ${!showNavDialog && "opacity-0 translate-x-28 overflow-hidden"}`}
                >
                  {link.link}
                </Link>
              ))
            }
          </div>
          <div className='border border-1 my-5'></div>
          <Button className='flex items-center gap-3 w-full'>
            Let's Chat
            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/speech-bubble-with-dots.png" alt="speech-bubble-with-dots" />
          </Button>
        </div>
      </nav>
    </navbar>
  );
};

export default Navbar;