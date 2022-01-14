import React from 'react';
import '../styles/projects.css';
import algoviz from '../images/projects/algoviz.png'
import chatjs from '../images/projects/chatjs9.png'
import externalLink from '../images/project-links/externalLink.png'
import githubLogo from '../images/project-links/githubLogo.png'

function Projects() {
  return (
  <div className="projects">
      <h3 id="projects-nav" className="tab-heading"><span className="list-num tab-num">04.&nbsp;</span>Projects</h3>
      {/* Project 1 */}
      <div className="project">
          <img className="project-img" src={algoviz} alt="algoviz"></img>
          <div className="project-info">
              <h3 style={{marginBottom: "20px"}}>Sorting Algorithm Visualizer</h3>
              <div className="project-desc">
                  <p>This Web app helps visualize some of the sorting algorithms to give a better intuition 
                    of how they are working. Some of the algorithms that can be visualized are: Bubble sort, Quick Sort, and Merge Sort.</p>
              </div>
              <ul className="project-stack">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Typescript</li>
                  <li>ReactJS</li>
              </ul>
              <div className="project-links">
                  <a href="https://visualizealgos.netlify.app" target="_blank" rel="noreferrer" ><img src={externalLink} alt="externalLink"/></a>
                  <a href="https://github.com/cpluspluswiz/algorithm-visualizer" target="_blank" rel="noreferrer" ><img src={githubLogo} alt="githubLogo"/></a>
              </div>
          </div>
      </div>
      {/* Project 2 */}
      <div className="project">
          <img className="project-img" src={chatjs} alt="chatjs"></img>
          <div className="project-info">
              <h3 style={{marginBottom: "20px"}}>Chat App</h3>
              <div className="project-desc">
                  <p>A Chat web app made using NextJS. Allows you to add an emial and start instantly chatting with them. 
                    Features google authentication using Fireabase.</p>
              </div>
              <ul className="project-stack">
                  <li>Firebase</li>
                  <li>NextJS</li>
                  <li>ReactJS</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                  <li>HTML</li>
              </ul>
              <div className="project-links">
                  <a href="https://react-chatjs.netlify.app" target="_blank" rel="noreferrer" ><img src={externalLink} alt="externalLink"/></a>
                  <a href="https://github.com/cpluspluswiz/react-chatjs" target="_blank" rel="noreferrer" ><img src={githubLogo} alt="githubLogo"/></a>
              </div>
          </div>
      </div>
  </div>
  );
}

export default Projects;