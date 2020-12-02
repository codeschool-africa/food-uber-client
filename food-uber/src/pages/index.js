import React from "react"
import { Link } from "react-router-dom"
// import {} from "r"

// components
import Banner from "../components/banner/Banner"
import plate from "../assets/images/featured_plate.png"

const Home = () => {
  return (
    <div>
      <Banner>
        <div className="banner__img">
          <img src={plate} alt="" />
        </div>
        <div className="banner__headline">
          <h1>It's that Simple.</h1>
          <p>
            Select what you want to eat from our menu, <br />
            We’ll <span>deliver</span> it to you, for <span>FREE!!</span>
          </p>
          <Link to="/menu" className="btn btn-primary">
            Visit our Menu <span>&raquo;</span>
          </Link>
        </div>
      </Banner>
    </div>
  )
}

export default Home
