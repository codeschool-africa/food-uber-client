import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/all"
import "./header.sass"
import { UserContext } from "../../context/UserContext"

// components
// import HeaderSvg from "./HeaderSvg"

// logo
import logo from "../../assets/images/logo.png"

const Header = () => {
  const [user, setUser] = useContext(UserContext)
  console.log(setUser)
  return (
    <header className="nav-header">
      <div className="svg-container">{/* <HeaderSvg /> */}</div>
      <div className="container">
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" activeClassName="active">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="auth">
          <ul>
            {user.isAuthenticated ? (
              <>
                <li>
                  <NavLink to="/my-orders" activeClassName="active">
                    My Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Favourites" activeClassName="active">
                    Favourites
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/profile" activeClassName="active">
                    Profile
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/signup">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login" activeClassName="active">
                    Login
                  </NavLink>
                </li>
              </>
            )}
            {(user.isAuthenticated &&
              user.data[0].role &&
              user.data[0].role !== "admin") ||
            "main-admin" ? (
              <>
                <li>
                  <NavLink to="/dashboard" activeClassName="active">
                    Dashboard
                  </NavLink>
                </li>
              </>
            ) : null}
            <li>
              <NavLink to="/cart" className="cart">
                <span></span>
                <AiOutlineShoppingCart className="icon" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
