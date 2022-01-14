import React from 'react';
import '../styles/about.css';

function About() {
  return (
  <>
  <section className="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </section>
    <div className="intro-container" id="about-nav">
        <h2 className="heading-2">Hi, My name is</h2>
        <h1 className="heading-1">Muhammad Abdullah</h1>
        <h3 className="heading-3">Full Stack Developer</h3>
    </div>
  </>
  );
}

export default About;