import React from "react"
import "./modals.css"
import "../layout.css"

import {
  OpenTrackCarousel,
  EquityCarousel,
  AlgorithmCarousel,
} from "../Carousel/carousel"

const Modals = () => (
  <>
    <div id="opentrack-modal" className="modal">
      <div id="opentrack-close" className="close-button">
        <text>&times;</text>
      </div>
      <OpenTrackCarousel />
      <div className="modal-text">
        <h4>OpenTrack</h4>
        <h6>Full Stack Website</h6>
        <hr />
        <p>
          Launched in 2020, OpenTrack is a platform dedicated to the promotion
          of quality courses in a single space. Our goal is to give self-driven
          people of all backgrounds a platform to find the materials they need
          to pursue their education or curiosity through effiecent and effective
          tracks.
        </p>
        <a
          href="https://github.com/TrentYetzer/opentrack.tech"
          target="_blank"
          rel="noreferrer"
        >
          <button className="view-button">
            <text>View Code</text>
            <i className="fab fa-github"></i>
          </button>
        </a>
      </div>
    </div>
    <div id="equity-pursuit-modal" className="modal">
      <div id="equity-pursuit-close" className="close-button">
        <text>&times;</text>
      </div>
      <EquityCarousel />
      <div className="modal-text">
        <h4>Equity Pursuit</h4>
        <h6>Full Stack Website</h6>
        <hr />
        <p>
          Based on GeoGuessr, Equity-pursuit is a game where a player is given
          playlist of 5 houses fetched from Zillow to guess the price based on
          the location. The player has acess to an interactive google maps with
          the location marked and can recieve hints for negative impact on the
          possible score recieved at the end.
        </p>
        <a
          href="https://github.com/TrentYetzer/Equity-pursuit"
          target="_blank"
          rel="noreferrer"
        >
          <button className="view-button">
            <text>View Code</text>
            <i className="fab fa-github"></i>
          </button>
        </a>
      </div>
    </div>
    <div id="algorithm-visualizer-modal" className="modal">
      <div id="algorithm-visualizer-close" className="close-button">
        <text>&times;</text>
      </div>
      <AlgorithmCarousel />
      <div className="modal-text">
        <h4>Algorithm Visualizer</h4>
        <h6>Peronsal Code Project</h6>
        <hr />
        <p>
          Single Page Application to help practice writing and understanding how
          sorting algorithms parse through arrays of data. More sorting
          algorithms are being added, and as of late July 2020 there are a total
          of 10 algorithms and include merge, selection, tim, quick, and more.
        </p>
        <div className="button-box">
          <a
            href="https://trentyetzer.github.io/algorithm-visualizer/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="view-button">
              <text>View Site</text>
              <i className="fas fa-external-link-alt"></i>
            </button>
          </a>
          <a
            href="https://github.com/TrentYetzer/algorithm-visualizer"
            target="_blank"
            rel="noreferrer"
          >
            <button className="view-button">
              <text>View Code</text>
              <i className="fab fa-github"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
    <div id="magic-mirror-modal" className="modal">
      <div id="magic-mirror-close" className="close-button">
        <text>&times;</text>
      </div>
      <img
        src="https://i.ibb.co/L6NDG88/magic-mirror1.png"
        alt="magic-mirror1"
        border="0"
      />
      <div className="modal-text">
        <h4>Magic-Mirror</h4>
        <h6>Peronsal Code Project</h6>
        <hr />
        <p>
          Front end project with a few different modules to display information
          on a magic mirror. included modules are date and time, weather, a
          to-do list, and a calender module is to be added Fall 2020.
        </p>
        <a
          href="https://github.com/TrentYetzer/magic-mirror"
          target="_blank"
          rel="noreferrer"
        >
          <button className="view-button">
            <text>View Code</text>
            <i className="fab fa-github"></i>
          </button>
        </a>
      </div>
    </div>
    <div id="mechmania-modal" className="modal">
      <div id="mechmania-close" className="close-button">
        <text>&times;</text>
      </div>
      <img
        src="https://i.ibb.co/XyRsYTy/Mechmania.png"
        alt="Mechmania"
        border="0"
      />
      <div className="modal-text">
        <h4>2019 Mechmania Code</h4>
        <h6>Codeing Competition</h6>
        <hr />
        <p>
          Mechmania is a 24 game hackathon where participants write an AI to
          play a game created by the hosts of the Reflections Projections
          Conference held at University of Illinois at Urbana-Champaign. This
          code was written for their 2019 game.
        </p>
        <a
          href="https://github.com/TrentYetzer/mechmania-2019"
          target="_blank"
          rel="noreferrer"
        >
          <button className="view-button">
            <text>View Code</text>
            <i className="fab fa-github"></i>
          </button>
        </a>
      </div>
    </div>
  </>
)

export default Modals
