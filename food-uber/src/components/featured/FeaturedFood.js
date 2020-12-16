import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { FoodContext } from "../../context/FoodContext"

import Food from "../food/Food"
import Search from "../search/Search"

import "./featured.sass"

const FeaturedFood = () => {
  let [foods, setFoods] = useContext(FoodContext)

  let data = foods.data
  let featuredFoods

  if (data) featuredFoods = data.filter((o) => o.featured === 1)

  return (
    <section className="featured">
      <div className="container">
        <Search />
        <h2>Explore Our Featured Plates</h2>
        <div className="showcase">
          {featuredFoods &&
            featuredFoods.map(({ name, id, food_image, description, cost }) => (
              <Food
                key={id}
                name={name}
                id={id}
                food_image={food_image}
                description={description}
                cost={cost}
              />
            ))}
          <div className="more">
            <Link to="/menu">View More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedFood
