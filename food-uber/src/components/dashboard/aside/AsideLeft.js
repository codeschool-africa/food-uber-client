import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import {
  FiLogOut,
  RiDashboardLine,
  RiSettings3Line,
  BiUserCircle,
  FaUsers,
  // BiFoodTag,
  IoFastFood,
} from "react-icons/all"
import { UserContext } from "../../../context/UserContext"

import "./aside.sass"

let routes = [
  {
    path: "",
    name: "Dashboard",
    icon: <RiDashboardLine className="icon" />,
  },
  {
    path: "food",
    name: "Foods",
    icon: <IoFastFood className="icon" />,
  },
  {
    path: "team",
    name: "Team",
    icon: <FaUsers className="icon" />,
  },

  {
    path: "profile",
    name: "Profile",
    icon: <BiUserCircle className="icon" />,
  },
  {
    path: "setting",
    name: "Setting",
    icon: <RiSettings3Line className="icon" />,
  },
]

const AsideLeft = ({ asideOpen, setnavOpen, isMobile }) => {
  const [user, setUser] = useContext(UserContext)

  const logout = () => {
    setUser({
      ...user,
      isAuthenticated: false,
      data: null,
    })
    localStorage.setItem("token", null)
  }
  return (
    <aside className={`aside-left ${asideOpen}`}>
      <nav>
        <ul className="navigation">
          {routes.map((prop, key) => {
            return (
              <li
                key={key}
                onClick={() => {
                  isMobile && setnavOpen(true)
                }}
              >
                <NavLink
                  to={`/dashboard/${prop.path}`}
                  activeClassName="active"
                >
                  {prop.icon}
                  <span>{prop.name}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
        <ul className="extra-links">
          <li
            onClick={() => {
              isMobile && setnavOpen(true)
            }}
          >
            <a href="#!" onClick={logout}>
              <FiLogOut className="icon" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default AsideLeft
