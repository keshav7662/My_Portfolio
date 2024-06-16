import React from 'react'
import Navbar from './layout/Navbar'
import Home from './layout/Home'
import About from './layout/About'
import Projects from './layout/Projects'
import Skills from './layout/Skills'
import Contact from './layout/Contact'
import LineStroke from './layoutComponents/LineStroke'
import Work from './layout/Work'
import './App.css'
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <LineStroke />
      <About />
      <Work/>
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
