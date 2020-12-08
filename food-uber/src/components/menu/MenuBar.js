import React, { useState, useEffect } from "react"

import "./menu.sass"

const MenuBar = () => {
  const [reveal, setReveal] = useState(false)
  const [lastYPos, setLastYPos] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY
      const isScrollingDown = yPos > lastYPos
      if (yPos > 0) {
        setReveal(isScrollingDown)
      } else {
        setReveal(false)
      }
      setLastYPos(yPos)
      console.log(isScrollingDown, yPos)
    }
    // console.log(window)
    window.addEventListener("scroll", handleScroll, false)
    return () => {
      window.removeEventListener("scroll", handleScroll, false)
    }
  }, [lastYPos, reveal])
  // console.log(reveal, lastYPos)
  return (
    <div className={reveal ? "revealed menu-bar" : "menu-bar"}>Hello Bar</div>
  )
}

export default MenuBar
