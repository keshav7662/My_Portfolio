import React, { useEffect } from 'react'
import Navbar from './layout/Navbar'
import Home from './layout/Home'
import About from './layout/About'
import Projects from './layout/Projects'
import Skills from './layout/Skills'
import Contact from './layout/Contact'
import LineStroke from './layoutComponents/LineStroke'
import Services from './layout/Services'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Aos from 'aos'
const App = () => {
 
  return (
    <>
      <Navbar />
      <Home />
      <LineStroke />
      <About />
      <Services/>
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
