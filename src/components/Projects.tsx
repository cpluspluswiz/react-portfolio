import React from 'react';
import '../styles/projects.css';
import project1 from '../images/projects/project1.png'
import externalLink from '../images/project-links/externalLink.png'
import githubLogo from '../images/project-links/githubLogo.png'

function Projects() {
  return (
  <div className="projects">
      <h3 id="projects-nav" className="tab-heading"><span className="list-num tab-num">04.&nbsp;</span>Projects</h3>
      {/* Project 1 */}
      <div className="project">
          <img className="project-img" src={project1} alt="project1"></img>
          <div className="project-info">
              <h3 style={{marginBottom: "20px"}}>Project 1</h3>
              <div className="project-desc">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut tortor arcu. 
                    Aenean risus nulla, pharetra a fringilla sit amet, aliquam tristique ante.</p>
              </div>
              <ul className="project-stack">
                  <li>vscode</li>
                  <li>mongodb</li>
                  <li>javascript</li>
                  <li>react</li>
                  <li>mongoose</li>
              </ul>
              <div className="project-links">
                  <a href="https://google.com" target="_blank" rel="noreferrer" ><img src={externalLink} alt="externalLink"/></a>
                  <a href="https://google.com" target="_blank" rel="noreferrer" ><img src={githubLogo} alt="githubLogo"/></a>
              </div>
          </div>
      </div>
      {/* Project 2 */}
      <div className="project">
          <img className="project-img" src={project1} alt="project2"></img>
          <div className="project-info">
              <h3 style={{marginBottom: "20px"}}>Project 2</h3>
              <div className="project-desc">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut tortor arcu. 
                    Aenean risus nulla, pharetra a fringilla sit amet, aliquam tristique ante.</p>
              </div>
              <ul className="project-stack">
                  <li>vscode</li>
                  <li>mongodb</li>
                  <li>javascript</li>
                  <li>react</li>
                  <li>mongoose</li>
              </ul>
              <div className="project-links">
                  <a href="https://google.com" target="_blank" rel="noreferrer" ><img src={externalLink} alt="externalLink"/></a>
                  <a href="https://google.com" target="_blank" rel="noreferrer" ><img src={githubLogo} alt="githubLogo"/></a>
              </div>
          </div>
      </div>
      {/* Project 3 */}
      <div className="project">
          <img className="project-img" src={project1} alt="project1"></img>
          <div className="project-info">
              <h3 style={{marginBottom: "20px"}}>Project 3</h3>
              <div className="project-desc">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut tortor arcu. 
                    Aenean risus nulla, pharetra a fringilla sit amet, aliquam tristique ante.</p>
              </div>
              <ul className="project-stack">
                  <li>vscode</li>
                  <li>mongodb</li>
                  <li>javascript</li>
                  <li>react</li>
                  <li>mongoose</li>
              </ul>
              <div className="project-links">
                  <a href="https://google.com" target="_blank" rel="noreferrer" ><img src={externalLink} alt="externalLink"/></a>
                  <a href="https://google.com" target="_blank" rel="noreferrer" ><img src={githubLogo} alt="githubLogo"/></a>
              </div>
          </div>
      </div>
      {/* Project 4 */}
      <div className="project">
          <img className="project-img" src={project1} alt="project1"></img>
          <div className="project-info">
              <h3 style={{marginBottom: "20px"}}>Project 4</h3>
              <div className="project-desc">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut tortor arcu. 
                    Aenean risus nulla, pharetra a fringilla sit amet, aliquam tristique ante.</p>
              </div>
              <ul className="project-stack">
                  <li>vscode</li>
                  <li>mongodb</li>
                  <li>javascript</li>
                  <li>react</li>
                  <li>mongoose</li>
              </ul>
              <div className="project-links">
                  <a href="https://google.com" target="_blank" rel="noreferrer" ><img src={externalLink} alt="externalLink"/></a>
                  <a href="https://google.com" target="_blank" rel="noreferrer" ><img src={githubLogo} alt="githubLogo"/></a>
              </div>
          </div>
      </div>
  </div>
  );
}

export default Projects;