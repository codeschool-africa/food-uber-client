import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import {
  IoHomeOutline,
  AiOutlineShoppingCart,
  CgProfile,
  FiMoreHorizontal,
  AiOutlineOrderedList,
  AiOutlineStar,
  AiFillStar,
  MdHelpOutline,
  BsInfoSquare,
  RiSettings3Line,
} from "react-icons/all"

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
      <div className="burger">
        <span></span>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                <IoHomeOutline className="icon" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" activeClassName="active">
                <AiOutlineShoppingCart className="icon" />
                <span>Cart</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName="active">
                <CgProfile className="icon" />
                <span>Profile</span>
              </NavLink>
            </li>
            <li>
              <span className="more">
                <FiMoreHorizontal className="icon" />
                <span>More</span>
              </span>
            </li>
          </ul>
          <div className="drop-up-menu">
            <div className="menu-backdrop"></div>
            <div className="navigation">
              <div className="nav-header">More</div>
              <nav>
                <ul>
                  <li>
                    <NavLink>{/* < */}</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MenuBar
