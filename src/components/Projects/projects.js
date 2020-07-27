import React from "react"
import "./projects.css"
import "../layout.css"

const Projects = () => (
  <>
    <div className="projects-section">
      <div className="flex column title">
        <h2 id="projects-title" className="left">
          Projects
        </h2>
        <hr id="projects-title-bar" className="right" />
      </div>
      <div id="projects-content" className="hidden flex projects-content">
        <div className="flex card">
          <div className="flex column card-contents">
            <div className="card-title">OpenTrack</div>
            <div className="card-subtitle">
              <img
                src="https://img.icons8.com/color/32/000000/angularjs.png"
                alt="angular"
              />
              <img
                src="https://img.icons8.com/material-sharp/32/000000/django.png"
                alt="django"
              />
              <img
                src="https://img.icons8.com/color/32/000000/postgreesql.png"
                alt="postgresql"
              />
            </div>
            <div className="card-action">
              <button className="project-button">
                <span id="opentrack-button"></span>
                <text>Learn More</text>
              </button>
            </div>
          </div>
          <img
            className="thumbnail"
            src="https://i.ibb.co/J30b4g8/open-track1.png"
            alt="open-track1"
            border="0"
          />
        </div>
        <div className="flex card">
          <div className="flex column card-contents">
            <div className="card-title">Equity Pursuit</div>
            <div className="card-subtitle">
              <img
                src="https://img.icons8.com/color/32/000000/angularjs.png"
                alt="angular"
              />
              <img
                src="https://img.icons8.com/color/32/000000/spring-logo.png"
                alt="springboot"
              />
              <img
                src="https://img.icons8.com/color/32/000000/postgreesql.png"
                alt="postgresql"
              />
            </div>
            <div className="card-action">
              <button className="project-button">
                <span id="equity-pursuit-button"></span>
                <text>Learn More</text>
              </button>
            </div>
          </div>
          <img
            className="thumbnail"
            src="https://i.ibb.co/D18GmNY/equity-pursuit1.png"
            alt="equity-pursuit1"
            border="0"
          />
        </div>
        <div className="flex card">
          <div className="flex column card-contents">
            <div className="card-title">Algorithm Visualizer</div>
            <div className="card-subtitle">
              <img
                src="https://img.icons8.com/color/32/000000/vue-js.png"
                alt="vuejs"
              />
            </div>
            <div className="card-action">
              <button className="project-button">
                <span id="algorithm-visualizer-button"></span>
                <text>Learn More</text>
              </button>
            </div>
          </div>
          <img
            className="thumbnail"
            src="https://i.ibb.co/kV768tX/algorithm-visualizer1.png"
            alt="algorithm-visualizer1"
            border="0"
          />
        </div>
        <div className="flex card">
          <div className="flex column card-contents">
            <div className="card-title">Magic Mirror</div>
            <div className="card-subtitle">
              <img
                src="https://img.icons8.com/ultraviolet/32/000000/react.png"
                alt="react"
              />
            </div>
            <div className="card-action">
              <button className="project-button">
                <span id="magic-mirror-button"></span>
                <text>Learn More</text>
              </button>
            </div>
          </div>
          <img
            className="thumbnail"
            src="https://i.ibb.co/L6NDG88/magic-mirror1.png"
            alt="magic-mirror1"
            border="0"
          />
        </div>
        <div className="flex card">
          <div className="flex column card-contents">
            <div className="card-title">2019 Mechmania Code</div>
            <div className="card-subtitle">
              <img
                src="https://img.icons8.com/color/32/000000/python.png"
                alt="python"
              />
            </div>
            <div className="card-action">
              <button className="project-button">
                <span id="mechmania-button"></span>
                <text>Learn More</text>
              </button>
            </div>
          </div>
          <img
            className="thumbnail"
            src="https://i.ibb.co/XyRsYTy/Mechmania.png"
            alt="Mechmania"
            border="0"
          />
        </div>
      </div>
    </div>
  </>
)

export default Projects
