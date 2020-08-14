import React from "react"
import "./about.css"
import "../layout.css"

const About = () => (
  <>
    <div className="about-section">
      <div className="flex column title">
        <h2 id="about-title" className="left">
          About
        </h2>
        <hr id="about-title-bar" className="right" />
      </div>

      <div id="about-content" className="hidden about-content">
        <div className="flex top">
          <div className="flex row strengths">
            <li>
              <i className="fas fa-bolt"></i>
              <div>
                <strong>Quick Learner</strong>
                <p>Obtaining new knowledge is thrilling.</p>
              </div>
            </li>
            <li>
              <i className="fas fa-hat-wizard"></i>
              <div>
                <strong>Diverse Skill Base</strong>
                <p>Wearing a variety hats has never been a bad thing.</p>
              </div>
            </li>
          </div>
          <div className="flex row strengths">
            <li>
              <i className="fas fa-briefcase"></i>
              <div>
                <strong>Passionate Worker</strong>
                <p>
                  I love the field I work in and hope it can make a difference.
                </p>
              </div>
            </li>
            <li>
              <i className="fas fa-th-list"></i>
              <div>
                <strong>Organized</strong>
                <p>
                  Nothing is better then working with clean code in an organized
                  space.
                </p>
              </div>
            </li>
          </div>
        </div>

        <div className="flex bottom">
          <img
            src="https://i.ibb.co/Kb2Rkjh/Profile.png"
            alt="Profile"
            border="0"
          />
          <div className="flex column description">
            <p>
              Currently a CS graduate student and teaching assistant at North
              Dakota State University actively searching for an internship or
              co-op opportunity for the summer of 2021. I have a strong desire
              to use new technologies to create applications or tools that look
              amazing and have the ability to make a difference in someones
              life.
            </p>
            <p>
              <a href="#contact">Contact me</a>
            </p>
            <a
              href="https://drive.google.com/file/d/1Tv7fYK2ik7YNa9oFyk3o5VXmFiXJbv9e/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="about-button cool-button">
                <span></span>
                <text>View my resume</text>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default About

//https://css-tricks.com/css-only-carousel/
