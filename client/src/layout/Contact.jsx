import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { ContactForm } from '../assets/Svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.warning('Under Progress!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="px-2 md:px-4 h-screen">
      <h2 className="text-4xl md:text-6xl font-bold my-8 text-center">Get In <span className='text-title-rgba'>Touch</span></h2>
      <div className='flex flex-col md:flex-row justify-center gap-5' data-aos="fade-up" data-aos-duration="2000">
        <div className='contact-form w-full lg:max-w-[600px] bg-black px-6'>
          <ContactForm className="w-full lg:w-[500px]" />
        </div>
        <div className="download-cv mx-auto text-center lg:w-[600px] p-6 md:p-10 rounded-sm">
          <h2 className='font-bold text-4xl text-gray-600'>Contact Me</h2>
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="name">Name:</label>
              <input className="w-full p-2 border border-gray-300 rounded" type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="email">Email:</label>
              <input className="w-full p-2 border border-gray-300 rounded" type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="message">Message:</label>
              <textarea className="w-full p-2 border border-gray-300 rounded" name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button className="hire-me w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Send</button>
          </form>
          <div className='flex justify-center w-full'>
            <div className='w-28 h-10 md:w-36 md:h-10 lg:w-60 lg:h-14 flex items-center justify-center gap-5 px-2 rounded-sm cursor-pointer my-10'>
              <a href="https://github.com/keshav7662" target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-gray-800 hover:scale-110 duration-200 border border-gray-400 hover:border-gray-800 rounded-full p-1'>
                <FaGithub className='text-[18px] md:text-[24px] lg:text-[28px]' />
              </a>
              <a href="https://www.linkedin.com/in/keshavkumar7662/" target="_blank" rel="noopener noreferrer" className='text-gray-500 hover:text-blue-600 hover:scale-110 duration-200 border border-gray-400 hover:border-blue-500 rounded-full p-1'>
                <FaLinkedin className='text-[18px] md:text-[24px] lg:text-[28px]' />
              </a>
              <a href="https://leetcode.com/u/Keshav_7662/" target="_blank" rel="noopener noreferrer" className='text-gray-500 hover:text-amber-500 hover:scale-110 duration-200 border border-gray-400 hover:border-amber-500 rounded-full p-1'>
                <SiLeetcode className='text-[18px] md:text-[24px] lg:text-[28px]' />
              </a>
              <a href="mailto:keshavverma472@gmail.com" target="_blank" rel="noopener noreferrer" className='text-gray-500 hover:text-red-500 hover:scale-110 duration-200 border border-gray-400 hover:border-red-400 rounded-full p-1'>
                <MdEmail className='text-[18px] md:text-[24px] lg:text-[28px]' />
              </a>
            </div>
          </div>
          <div>
            <p className='font-semibold text-xs text-gray-600'>@No Copyrights. Feel free to use this template - Keshav <span className='text-title-rgba'>Kumar</span></p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
