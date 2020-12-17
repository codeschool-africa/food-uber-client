import React from "react"
import Banner from "../../components/banner/Banner"

import MenuBar from "../../components/menu/MenuBar"

const Favourites = () => {
  return (
    <div className="menu">
      <Banner>
        <div className="banner__headline">
          <h1>My Favourite Plates</h1>
        </div>
      </Banner>
      <MenuBar />
    </div>
  )
}

export default Favourites
