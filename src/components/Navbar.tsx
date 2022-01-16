import React from 'react';
import '../styles/navbar.css';
import pdf from "../documents/resume1.pdf"


function Navbar() {

  return (
  <div className="navbar">
      <div className="logo">MA</div>
      <div className="nav-right">
        <ul className="nav-links">
            <li><a href="#about-nav"><span className="list-num">01.&nbsp;</span>About</a></li>
            <li><a href="#skills-nav"><span className="list-num">02.&nbsp;</span>Skills</a></li>
            <li><a href="#experience-nav"><span className="list-num">03.&nbsp;</span>Experience</a></li>
            <li><a href="#projects-nav"><span className="list-num">04.&nbsp;</span>Projects</a></li>
            <li><a href="#contact-nav"><span className="list-num">05.&nbsp;</span>Contact</a></li>
        </ul>
        <a href={pdf} target="_blank" rel="noreferrer" className="btn" id="resume">Resume</a>
    </div>
  </div>
  );
}

export default Navbar;