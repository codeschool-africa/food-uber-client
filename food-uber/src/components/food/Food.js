import React, { useState } from "react"

//
import "./food.sass"
const Food = ({ name, id, food_image, description, cost }) => {
  const [cart, setCart] = useState([])
  return (
    <div className="food" key={id}>
      <div className="img-container">
        <img src={food_image} alt={name} />
      </div>
      <div className="food-content">
        <h3>{name}</h3>
        {/* <p>{description}</p> */}
        <p>{cost} Tshs</p>
        <div className="btns">
          <button
            onClick={() => {
              setCart([...cart, id])
            }}
          >
            Add to Cart
          </button>
          <button>Preview</button>
        </div>
      </div>
    </div>
  )
}

export default Food
