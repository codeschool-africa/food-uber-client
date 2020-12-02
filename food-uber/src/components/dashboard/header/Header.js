import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { FaAngleDown } from "react-icons/all"
import { UserContext } from "../../../context/UserContext"

// import dp from "../assets/images/dp.png"
import logo from "../../../assets/images/logo.png"

import "./header.sass"

const Header = ({ navOpen, handleNav }) => {
  const [user, setUser] = useContext(UserContext)
  const [open, setOpen] = useState(false)
  //   let name = user.name.split(" ")[0]
  const logout = () => {
    setUser({
      ...user,
      isAuthenticated: false,
      data: null,
    })
    localStorage.setItem("token", null)
  }
  if (user && user.data) console.log(user.data[0])

  return (
    <header
      className={navOpen ? "dashboard-header" : "dashboard-header full-width"}
    >
      <div className="container">
        <div className="burger-logo-container">
          <div
            className={navOpen ? "burger" : "burger burger-shift-right"}
            onClick={handleNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Kodemunit logo" className="logo" />
            </Link>
          </div>
        </div>
        <nav>
          <span className="role nav-link"></span> &nbsp;
          <a
            href="#!"
            className="user-name nav-link"
            // onTap={() => setOpen(!open)}
          >
            <span className="nav-link">Name</span>
            <FaAngleDown className="icon" />
          </a>
          <ul className={open ? "dropdown show" : "dropdown"}>
            <li>
              <a href="#!" onClick={() => setOpen(false)}>
                Name
              </a>
            </li>
            <li>
              <span>{user.role}</span>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <a
                href="#!"
                onClick={() => {
                  logout()
                  setOpen(false)
                }}
              >
                Logout
              </a>
            </li>
          </ul>
          <div className="profile-image">
            {user && user.data && user.data[0].dp_path && (
              <img
                src={`http://faraja-food-uber.herokuapp.com/assets/uploads/dp/${user.data[0].dp_path}`}
                alt="profile/dp"
              />
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
