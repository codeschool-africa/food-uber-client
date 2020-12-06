import React, { useContext, useState } from "react"
import { FoodContext } from "../../context/FoodContext"

import "./featured.sass"

const FeaturedFood = () => {
  let [foods, setFoods] = useContext(FoodContext)
  let [cart, setCart] = useState([])

  let data = foods.data
  let featuredFoods

  if (data) featuredFoods = data.filter((o) => o.featured === 1)
  console.log(setFoods)
  return (
    <section className="featured">
      <div className="container">
        <h2>Explore Our Featured Plates</h2>
        <form>
          <label htmlFor="search">
            <input
              type="text"
              placeholder="Search through our menu..."
              id="search"
            />
          </label>
          <button>Search</button>
        </form>
        <div className="showcase">
          {featuredFoods &&
            featuredFoods.map(({ name, id, food_image, description, cost }) => (
              <div className="food" key={id}>
                <span>{cost} Tshs</span>
                <div className="img-container">
                  <img
                    src={food_image}
                    alt={name}
                    style={{
                      height: "200px",
                      width: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h3>{name}</h3>
                <p>{description}</p>
                <button
                  onClick={() => {
                    setCart([...cart, id])
                  }}
                >
                  Add to Cart
                </button>
                <button>Preview</button>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedFood
