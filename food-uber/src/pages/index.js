import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// components
import Banner from "../components/banner/Banner"
import FeaturedFood from "../components/featured/FeaturedFood"
import MenuBar from "../components/menu/MenuBar"

// imag
import plate from "../assets/images/featured_plate.png"

const Home = () => {
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => setYOffset(window.pageYOffset)
    window.addEventListener("scroll", handleScroll, false)
    return () => window.removeEventListener("scroll", handleScroll, false)
  }, [])

  return (
    <div>
      <Banner>
        <div
          className="banner__img"
          // style={{
          //   transform: `translateY(-${yOffset * 0.99999999}px)`,
          // }}
        >
          <img
            src={plate}
            alt=""
            loading="lazy"
            // style={{
            //   transform: `translateY(${yOffset * 0.2}px)`,
            //   transition: "transform .1s linear",
            // }}
          />
        </div>
        <div
          className="banner__headline"
          // style={{
          //   transform: `translateY(-${yOffset * 0.1}px)`,
          //   transition: "transform .1s linear",
          // }}
        >
          <h1>It's that Simple.</h1>
          <p>
            Select your favourite plate from our menu, <br />
            We’ll <span>deliver</span> it to you, <span>FREE DELIVERY!!</span>
          </p>
          <Link to="/menu" className="btn btn-primary">
            Visit our Menu <span>&raquo;</span>
          </Link>
        </div>
      </Banner>
      <FeaturedFood />
      <MenuBar />
    </div>
  )
}

export default Home
