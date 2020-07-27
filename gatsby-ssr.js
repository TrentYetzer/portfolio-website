import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      src="https://kit.fontawesome.com/8115b58143.js"
      crossorigin="anonymous"
    ></script>,
  ])
}
