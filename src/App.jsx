import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home'
import About from './components/About/About';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;