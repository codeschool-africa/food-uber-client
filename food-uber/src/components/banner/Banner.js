import React from "react"

import "./banner.sass"

const Banner = ({ children }) => {
  return (
    <div className="banner">
      <div className="before"></div>
      <header>{/* <nav>navgation</nav> */}</header>
      <div className="container">{children}</div>
    </div>
  )
}

export default Banner
