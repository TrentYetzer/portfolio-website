import React from "react"
import "./carousel.css"
import "../layout.css"

const OpenTrackCarousel = () => (
  <>
    <div className="carousel">
      <img
        id="0"
        className="current"
        src="https://i.ibb.co/J30b4g8/open-track1.png"
        alt="open-track1"
        border="0"
      />
      <img
        id="1"
        className="next"
        src="https://i.ibb.co/gZk9RpY/open-track2.png"
        alt="open-track2"
        border="0"
      />
      <img
        id="2"
        className="queue"
        src="https://i.ibb.co/gts88Tb/open-track3.png"
        alt="open-track3"
        border="0"
      />
      <img
        id="3"
        className="queue"
        src="https://i.ibb.co/vPzfQSb/open-track4.png"
        alt="open-track4"
        border="0"
      />
      <img
        id="4"
        className="queue"
        src="https://i.ibb.co/xLKLpSp/open-track5.png"
        alt="open-track5"
        border="0"
      />
      <img
        id="5"
        className="queue"
        src="https://i.ibb.co/XSbbwBN/open-track6.png"
        alt="open-track6"
        border="0"
      />
      <img
        id="6"
        className="queue"
        src="https://i.ibb.co/X2TfNyh/open-track7.png"
        alt="open-track7"
        border="0"
      />
      <img
        id="7"
        className="previous"
        src="https://i.ibb.co/YBhW6kV/open-track8.png"
        alt="open-track8"
        border="0"
      />
      <i
        id="previous-0"
        className="fas fa-chevron-circle-left previousButton"
      ></i>
      <i id="next-0" className="fas fa-chevron-circle-right nextButton"></i>
    </div>
  </>
)

const EquityCarousel = () => (
  <>
    <div className="carousel">
      <img
        id="10"
        className="current"
        src="https://i.ibb.co/D18GmNY/equity-pursuit1.png"
        alt="equity-pursuit1"
        border="0"
      />
      <img
        id="11"
        className="next"
        src="https://i.ibb.co/LtFXwDx/equity-pursuit2.png"
        alt="equity-pursuit2"
        border="0"
      />
      <img
        id="12"
        className="queue"
        src="https://i.ibb.co/Y497Dp0/equity-pursuit3.png"
        alt="equity-pursuit3"
        border="0"
      />
      <img
        id="13"
        className="previous"
        src="https://i.ibb.co/F3BYNvf/equity-pursuit4.png"
        alt="equity-pursuit4"
        border="0"
      />
      <i
        id="previous-1"
        className="fas fa-chevron-circle-left previousButton"
      ></i>
      <i id="next-1" className="fas fa-chevron-circle-right nextButton"></i>
    </div>
  </>
)

const AlgorithmCarousel = () => (
  <>
    <div className="carousel">
      <img
        id="20"
        className="current"
        src="https://i.ibb.co/kV768tX/algorithm-visualizer1.png"
        alt="algorithm-visualizer1"
        border="0"
      />
      <img
        id="21"
        className="next"
        src="https://i.ibb.co/XW41Wxc/algorithm-visualizer2.png"
        alt="algorithm-visualizer2"
        border="0"
      />
      <img
        id="22"
        className="queue"
        src="https://i.ibb.co/3Sx7LZf/algorithm-visualizer3.png"
        alt="algorithm-visualizer4"
        border="0"
      />
      <i
        id="previous-2"
        className="fas fa-chevron-circle-left previousButton"
      ></i>
      <i id="next-2" className="fas fa-chevron-circle-right nextButton"></i>
    </div>
  </>
)

export { OpenTrackCarousel, EquityCarousel, AlgorithmCarousel }
