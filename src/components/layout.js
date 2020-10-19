/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Home from "./Home/home"
import About from "./About/about"
import Projects from "./Projects/projects"
import Modals from "./Modals/modals"
import Contact from "./Contact/contact"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Modals />
      <div id="parallax" className="parallax">
        <div id="home" className="hero parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <Home />
          </div>
        </div>
        <div id="interactive" className="home-button">
          <a href="#projects">
            <button className="cool-button">
              <span></span>
              <text>View My Work</text>
            </button>
          </a>
        </div>
        <div id="about" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore shapes">
            <img
              src="https://s22.postimg.cc/y3ll0amgx/driehoeken-01.png"
              alt="foreground-shapes"
            />
          </div>
          <div className="parallax__layer parallax__layer--base">
            <About />
          </div>
        </div>
        <div id="projects" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
            <Projects />
          </div>
        </div>
        <div id="contact" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <Contact />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
