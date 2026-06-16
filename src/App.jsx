import { useState } from 'react'
 import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Header from "./components/header.jsx";
import Hero from "./sections/hero.jsx";
import About from "./sections/about.jsx";
import Technologies from "./sections/technologies.jsx";
import Skills from "./sections/skills.jsx";
import Projects from "./sections/projects.jsx";
import HireMe from "./sections/hireMe.jsx";
import Contact from "./sections/contact.jsx";
import Footer from "./components/footer.jsx";
function App() {
 

  return (
     <>
      <Header />
      
      <Hero />

      <About />
 
   <Technologies />
   <Skills />
      <Projects />
<HireMe />
<Contact />
<Footer/>
    </>
  )
}

export default App
