import React from "react"
import "./contact.css"
import "../layout.css"

const Contact = () => (
  <>
    <div className="contact-section">
      <div className="top-triangle" />
      <div className="flex column white">
        <h2 id="contact-title" className="left">
          Coding Competitions
        </h2>
        <hr id="contact-title-bar" className="right" />
      </div>
      <div id="contact-content" className="hidden contact-content flex row">
        <div className="comp-card">
          <h6 className="comp-card-title">Digi-Key DKC3 2020</h6>
          <p className="comp-card-subtitle">3rd Place - 20 Teams</p>
        </div>
        <div className="comp-card">
        <h6 className="comp-card-title">UIUC R|P Mechmanaia 2020</h6>
        <p className="comp-card-subtitle">3rd Place - 50 Teams</p>
        </div>
        <div className="comp-card">
        <h6 className="comp-card-title">ICPC North Central Regional NDSU Site 2019</h6>
        <p className="comp-card-subtitle">6th Place - 20 Teams</p>
        </div>
        <div className="comp-card">
        <h6 className="comp-card-title">UIUC R|P Mechmanaia 2019</h6>
        <p className="comp-card-subtitle">7th Place - 17 Teams</p>
        </div>
        <div className="comp-card">
        <h6 className="comp-card-title">NDSU Byte-le Royale 2019</h6>
        <p className="comp-card-subtitle">3rd Place - 8 Teams</p>
        </div>
      </div>
        <div id="footer" className="footer flex column">
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
            </div>
          <p>© 2020 Trent Yetzer</p>
        </div>
    </div>
  </>
)
export default Contact
