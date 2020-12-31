import React from "react"
import { Link } from "react-router-dom"
import { RiAppsLine, FaGooglePlay, FaAppStore } from "react-icons/all"
import app from "../../assets/images/app.svg"

import "./app.sass"
const App = () => {
  return (
    <div className="app">
      <div className="app-details">
        <h2>
          <RiAppsLine className="icon" /> Food Uber App
        </h2>
        <div className="home-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aut
            voluptatem culpa officiis quam quos ipsam. Dolore reprehenderit
            fugit voluptatibus, recusandae iusto, repellat vitae dolor nobis
            explicabo dolorum neque debitis?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aut
            voluptatem culpa officiis quam quos ipsam. Dolore reprehenderit
            fugit voluptatibus, recusandae iusto, repellat vitae dolor nobis
            explicabo dolorum neque debitis?
          </p>
          <Link to="/food-uber-app">Learn More</Link>
        </div>
        <div className="btns">
          <a href="#" className="btn btn-primary">
            <FaGooglePlay className="icon" />
            Google Playstore
          </a>
          <a href="#" className="btn btn-primary">
            <FaAppStore className="icon" />
            App Store
          </a>
        </div>
      </div>
      <div className="app-image">
        <img src={app} alt="food uber app" />
      </div>
    </div>
  )
}

export default App
