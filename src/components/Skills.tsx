import React from 'react';
import '../styles/skills.css';
import reactLogo from '../images/skills/reactLogo.svg'
import typescriptLogo from '../images/skills/typescriptLogo.svg'
import html5Logo from '../images/skills/html5Logo.svg'
import css3Logo from '../images/skills/css3Logo.svg'
import mongodbLogo from '../images/skills/mongodbLogo.svg'

function Skills() {
  return (
  <>
    <h3 id="skills-nav" className="tab-heading"><span className="list-num tab-num">02.&nbsp;</span>Skills</h3>
    <div className="skills">
        <div className="skill"><img src={html5Logo} alt="html5Logo"></img>HTML5</div>
        <div className="skill"><img src={css3Logo} alt="css3Logo"></img>CSS3</div>
        <div className="skill"><img src={typescriptLogo} alt="typescriptLogo"></img>TypeScript</div>
        <div className="skill"><img src={reactLogo} alt="reactLogo"></img>ReactJS</div>
        <div className="skill"><img src={mongodbLogo} alt="mongodbLogo"></img>MongoDB</div>
        <div className="skill"><img src={reactLogo} alt="reactlogo"></img>Reactjs</div>
    </div>
    
  </>
  );
}

export default Skills;