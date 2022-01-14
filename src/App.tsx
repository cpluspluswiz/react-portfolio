import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Experience from './components/Experience'
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills'

function App() {
  return (
  <>
    <Navbar/>
    <About/>
    <Skills/>
    <div style={{overflow: "hidden", position: "relative"}}>
    <Experience/>
    </div>
    <Projects/>
    <div style={{overflow: "hidden", position: "relative"}}>
    <Footer/>
    </div>
  </>
  );
}

export default App;
