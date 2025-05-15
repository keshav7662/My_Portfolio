import React, { useState, useEffect } from 'react';
import { IoChatboxEllipsesOutline, IoLogoAmplify } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll'
import { Settings } from "lucide-react";
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

const Navbar = () => {
  const [showNavDialog, setShowNavDialog] = useState(false);
  const [hover, setHover] = useState(false);
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
  const handleOpenAdmin = () => {
    window.open("/admin/login", "_blank");
  }

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
    },
  ];

  return (
    <navbar className={'fixed top-0 w-full bg-transparent backdrop-blur-md z-20'}>
      <nav className='flex justify-between items-center px-6 py-4'>
        <a href='#home' className='flex items-center gap-2 cursor-pointer' onClick={handleRedirectHome}>
          <IoLogoAmplify size={32} className='hire-me text-white rounded p-1' />
        </a>
        <div className="hover-animate hidden md:flex space-x-6 font-bold">
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

        <div className='flex items-center'>
          <div className='flex flex-col items-end gap-1 md:hidden' onClick={handleMenu}>
            <div className='w-3 h-1 bg-black rounded-lg'></div>
            <div className='w-5 h-1 bg-black rounded-lg'></div>
            <div className='w-7 h-1 bg-black rounded-lg'></div>
          </div>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handleOpenAdmin}
          >
            {/* Settings Icon */}
            <div className="hidden md:block p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition">
              <Settings size={20} />
            </div>

            {/* Tooltip (Appears Below the Button) */}
            {hover && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md shadow-md">
                Admin
              </div>
            )}
          </div>
        </div>

        {/* sidebar */}
        <div className={`fixed flex flex-col justify-between bg-black text-white-rgba px-6 py-4 top-0 bottom-0 h-screen z-30 w-[300px] duration-500 ease-out ${showNavDialog ? 'right-0' : 'right-[-100%]'}`}>
          <div>
            <div className='flex justify-end'>
              <RxCross2 size={32} className='text-white-rgba lg:hidden' onClick={handleMenu} />
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
            <hr className='my-5 h-px bg-gray-200 border-0 dark:bg-gray-700' />
            <Button className='flex items-center  gap-3 mb-5 w-full bg-transparent border  tracking-tight'>
              Let's Chat
              <IoChatboxEllipsesOutline size={20} />
            </Button>
            <Button className='flex items-center  gap-3 text-md w-full bg-transparent border tracking-tight' onClick={handleOpenAdmin}>
              Admin
              <MdOutlineAdminPanelSettings size={20} />
            </Button>
          </div>
        </div>

      </nav>
    </navbar>
  );
};

export default Navbar;