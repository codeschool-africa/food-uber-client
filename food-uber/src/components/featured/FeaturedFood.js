import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { FoodContext } from "../../context/FoodContext"

import Food from "../food/Food"
import SearchResults from "../searchResults/SearchResults"

import "./featured.sass"

const FeaturedFood = () => {
  let [foods, setFoods] = useContext(FoodContext)
  let [openSearch, setOpenSearch] = useState(false)
  let [formData, setFormData] = useState({
    keyword: "",
  })

  let data = foods.data
  let featuredFoods

  if (data) featuredFoods = data.filter((o) => o.featured === 1)
  console.log(setFoods)
  const handleChange = (e) => {
    let { name, value } = e.target
    setFormData({
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setOpenSearch(true)
  }
  return (
    <section className="featured">
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="search">
            <input
              type="text"
              placeholder="Search through our menu..."
              id="search"
              name="keyword"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <button>Search</button>
        </form>
        {openSearch && <SearchResults keyword={formData.keyword} />}
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
