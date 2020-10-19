import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var sections = ["about-content", "projects-content", "contact-content"]
            window.setInterval(function () {
              sections.forEach(sec => {
                var rect = document.getElementById(sec).getBoundingClientRect()
                var element = document.getElementById(sec)
                if (rect.top <= 500) {
                  element.classList.add("fade-in-element")
                  element.classList.remove("hidden")
                  var title, bar
                  if (sec === "about-content") {
                    title = document.getElementById("about-title")
                    bar = document.getElementById("about-title-bar")
                  } else if (sec === "projects-content") {
                    title = document.getElementById("projects-title")
                    bar = document.getElementById("projects-title-bar")
                  } else {
                    title = document.getElementById("contact-title")
                    bar = document.getElementById("contact-title-bar")
                  }
                  title.classList.add("slide-left")
                  title.classList.remove("left")
                  bar.classList.add("slide-right")
                  bar.classList.remove("right")
                }
              })
            }, 200)

            var parallax = document.getElementById("parallax")
            var currentlyOpen = "none"
            var setMultiplier = 0

            function open(modal, background) {
              modal.classList.add("show")
              background.classList.add("dim")
              currentlyOpen = modal
              if (modal.id === "opentrack-modal") {
                setMultiplier = 0
              } else if (modal.id === "equity-pursuit-modal") {
                setMultiplier = 1
              } else if (modal.id === "magic-mirror-2-modal") {
                setMultiplier = 5
              } else if (modal.id === "algorithm-visualizer-modal") {
                setMultiplier = 2
              } else if (modal.id === "magic-mirror-modal") {
                setMultiplier = 3
              } else if (modal.id === "mechmania-modal") {
                setMultiplier = 4;
              }
            }
            function close(modal, background) {
              modal.classList.remove("show")
              background.classList.remove("dim")
              currentlyOpen = "none"
            }

            var projects = [
              "opentrack",
              "equity-pursuit",
              "magic-mirror-2",
              "algorithm-visualizer",
              "magic-mirror",
              "mechmania",
            ]
            var modals = []
            var openButtons = []
            var closeButtons = []

            projects.forEach(project => {
              var modal = document.getElementById(project + "-modal")
              var openButton = document.getElementById(project + "-button")
              var closeButton = document.getElementById(project + "-close")
              openButton.onclick = () => {
                open(modal, parallax)
              }
              closeButton.onclick = () => {
                close(modal, parallax)
              }
              modals.push(modal)
              openButtons.push(openButton)
              closeButtons.push(closeButton)
            })

            window.onclick = function (event) {
              var buttonHit = true
              if (
                event.target !== openButtons[0] &&
                event.target !== openButtons[1] &&
                event.target !== openButtons[2] &&
                event.target !== openButtons[3] &&
                event.target !== openButtons[4] &&
                event.target !== openButtons[5]
              ) {
                buttonHit = false
              }

              var modalClicked = true
              if (
                !modals[0].contains(event.target) &&
                !modals[1].contains(event.target) &&
                !modals[2].contains(event.target) &&
                !modals[3].contains(event.target) &&
                !modals[4].contains(event.target) &&
                !modals[5].contains(event.target)
              ) {
                modalClicked = false
              }
              if (!modalClicked && !buttonHit && currentlyOpen === modals[0]) {
                close(modals[0], parallax)
              } else if (!modalClicked && !buttonHit && currentlyOpen === modals[1]) {
                close(modals[1], parallax)
              } else if (!modalClicked && !buttonHit && currentlyOpen === modals[2]) {
                close(modals[2], parallax)
              } else if (!modalClicked && !buttonHit && currentlyOpen === modals[3]) {
                close(modals[3], parallax)
              } else if (!modalClicked && !buttonHit && currentlyOpen === modals[4]) {
                close(modals[4], parallax)
              }
            }

            var current
            var currentId
            var numberOfSlides = [8, 4, 3]
            function setUpCarousel() {
              current = document.getElementsByClassName("current")[setMultiplier]
              currentId = Number(current.id)
            }

            var previousButtons = ["previous-0", "previous-1", "previous-2"]
            var nextButtons = ["next-0", "next-1", "next-2"]

            previousButtons.forEach(button => {
              var previous = document.getElementById(button)
              previous.onclick = () => {
                var currentSlideCount = numberOfSlides[previousButtons.indexOf(button)]
                setUpCarousel()
                var pointer = currentId - setMultiplier * 10
                var newPreviousId = (pointer - 2) % currentSlideCount
                var newCurrentId = (pointer - 1) % currentSlideCount
                var newQueueId = (pointer + 1) % currentSlideCount

                if (newPreviousId === -2) {
                  newPreviousId = currentSlideCount - 2
                }
                if (newPreviousId === -1) {
                  newPreviousId = currentSlideCount - 1
                }
                if (newCurrentId === -1) {
                  newCurrentId = currentSlideCount - 1
                }

                var newPrevious = document.getElementById(
                  newPreviousId + 10 * setMultiplier
                )
                var newCurrent = document.getElementById(
                  newCurrentId + 10 * setMultiplier
                )
                var newQueue = document.getElementById(newQueueId + 10 * setMultiplier)
                if (currentSlideCount > 3) {
                  newPrevious.classList.add("previous")
                  newPrevious.classList.remove("queue")
                  newQueue.classList.add("queue")
                  newQueue.classList.remove("next")
                } else {
                  newQueue.classList.add("previous")
                  newQueue.classList.remove("next")
                }
                newCurrent.classList.add("current")
                newCurrent.classList.remove("previous")
                current.classList.add("next")
                current.classList.remove("current")
              }
            })
            nextButtons.forEach(button => {
              var next = document.getElementById(button)
              next.onclick = () => {
                var currentSlideCount = numberOfSlides[nextButtons.indexOf(button)]
                setUpCarousel()
                var pointer = currentId - setMultiplier * 10
                var newNextId = (pointer + 2) % currentSlideCount
                var newCurrentId = (pointer + 1) % currentSlideCount
                var newQueueId = (pointer - 1) % currentSlideCount
                if (newQueueId === -1) {
                  newQueueId = currentSlideCount - 1
                }
                var newNext = document.getElementById(newNextId + 10 * setMultiplier)
                var newCurrent = document.getElementById(
                  newCurrentId + 10 * setMultiplier
                )
                var newQueue = document.getElementById(newQueueId + 10 * setMultiplier)
                newQueue.classList.add("queue")
                newQueue.classList.remove("previous")
                current.classList.add("previous")
                current.classList.remove("current")
                newCurrent.classList.add("current")
                newCurrent.classList.remove("next")
                newNext.classList.add("next")
                newNext.classList.remove("queue")
              }
            })
        `,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
