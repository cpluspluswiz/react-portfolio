import React from 'react';
import '../styles/footer.css';
import githubLogo from '../images/project-links/githubLogo.png'

function Footer() {
  return (
  <>
    <div className="footer">
      <h3 id="contact-nav" className="tab-heading"><span className="list-num tab-num">05.&nbsp;</span>Contact</h3>
      <div className="contact-me">
        <h2>Get In Touch</h2>
        <a href="mailto: m36abdul@uwaterloo.ca"className="btn">Get In Touch</a>
        <a href="https://github.com/cpluspluswiz" target="_blank" rel="noreferrer" ><img src={githubLogo} alt="githubLogo"/></a>
      </div>
      <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
      </div>
    </div>
    
  </>
  );
}

export default Footer;