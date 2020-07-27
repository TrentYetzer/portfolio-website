import React from "react"
import "./home.css"
import "../layout.css"

const Home = () => (
  <>
    <div className="home-section">
      <div className="home-background"></div>
      <div className="home-content">
        <h1>
          Hi, I'm <strong>Trent</strong>!
        </h1>
        <div className="subtitle">
          <div className="phrase">
            <h4>I am a</h4>
          </div>
          <div className="flashCard">
            <h4>
              <span className="card9">Nerd</span>
              <span className="card8">Git Scholar</span>
              <span className="card7">Web Devloper</span>
              <span className="card6">Techno-Optimist</span>
              <span className="card5">CSS Fanatic</span>
              <span className="card4">Java Devloper</span>
              <span className="card3">Python Programmer</span>
              <span className="card2">Front-End Developer</span>
              <span className="card1">Student</span>
              <span className="card0">Software Engineer</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Home
