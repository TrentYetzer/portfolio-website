import React from "react"
import "./contact.css"
import "../layout.css"

const Contact = () => (
  <>
    <div className="contact-section">
      <div className="top-triangle" />
      <div className="flex column white">
        <h2 id="contact-title" className="left">
          Contact
        </h2>
        <hr id="contact-title-bar" className="right" />
      </div>
      <div id="contact-content" className="hidden contact-content flex column">
        <h6>Want to work together?</h6>
        <p>
          Preferred form of contact is email or through linkedin if possible.
        </p>
        <div className="flex row">
          <a
            href="https://github.com/TrentYetzer"
            target="_blank"
            rel="noreferrer"
          >
            <button className="social-button">
              <i className="fab fa-github"></i>
              <span>
                <p>TrentYetzer</p>
              </span>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/trentyetzer/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="social-button">
              <i className="fab fa-linkedin-in"></i>
              <span>
                <p>Trent Yetzer</p>
              </span>
            </button>
          </a>
          <a href="mailto:trentyetzer0@gmail.com">
            <button className="social-button">
              <i className="fas fa-envelope"></i>
              <span>
                <p>trentyetzer0@gmail.com</p>
              </span>
            </button>
          </a>
          <a
            href="https://twitter.com/TrentYetzer"
            target="_blank"
            rel="noreferrer"
          >
            <button className="social-button">
              <i className="fab fa-twitter"></i>
              <span>
                <p>@TrentYetzer</p>
              </span>
            </button>
          </a>
          <button className="social-button">
            <i className="fab fa-discord"></i>
            <span>
              <p id="discordTag">Trent#6191</p>
            </span>
          </button>
        </div>
      </div>
      <div className="footer flex column">
        <p>@2020 Trent Yetzer</p>
      </div>
    </div>
  </>
)
export default Contact
