import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

import "./menu.sass"

const MenuBar = () => {
  const [reveal, setReveal] = useState(false)
  const [lastYPos, setLastYPos] = useState(0)
  useEffect(() => {
    // console.log("Mounted")
    const handleScroll = () => {
      const yPos = window.scrollY
      const isScrollingDown = yPos > lastYPos
      // console.log("Listened")
      if (yPos > 50) {
        setReveal(isScrollingDown)
        // console.log(isScrollingDown, yPos, reveal, "scrolled")
      } else {
        setReveal(false)
        // console.log(isScrollingDown, yPos, reveal, "nope")
      }
      setLastYPos(yPos)
    }

    window.addEventListener("scroll", handleScroll, false)
    return () => {
      window.removeEventListener("scroll", handleScroll, false)
    }
  }, [lastYPos])

  return (
    <div className={reveal ? "revealed menu-bar" : "menu-bar"}>
      <div className="burdger">
        <span></span>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <span>Home</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MenuBar
