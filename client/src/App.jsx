import 'aos/dist/aos.css'
import './App.css'
import About from './layout/About'
import Contact from './layout/Contact'
import Home from './layout/Home'
import Navbar from './layout/Navbar'
import Projects from './layout/Projects'
import Services from './layout/Services'
import Skills from './layout/Skills'
import LineStroke from './layoutComponents/LineStroke'
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