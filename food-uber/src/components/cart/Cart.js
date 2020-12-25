import React, { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

import "./cart.sass"

const CartCard = ({ id, name, description, food_image, cost }) => {
  let [number, setNumber] = useState(1)

  const add = () => {
    if (number > 10) {
      return null
    } else {
      setNumber(number + 1)
    }
  }

  const minus = () => {
    if (number <= 1) {
      return null
    } else {
      setNumber(number - 1)
    }
  }

  const removeFromCart = () => {
    // removal function
  }
  return (
    <div className="cart-card">
      <div className="img-container">
        <img src={food_image} alt={name} />
      </div>
      <div className="cart-details">
        <div className="name">{name}</div>
        <div className="cost">&#64; Tshs {cost}</div>
        <div className="counter">
          <span onClick={minus} className="span">
            <AiOutlineMinus className="icon" />
          </span>
          <span className="number">{number}</span>
          <span onClick={add} className="span">
            <AiOutlinePlus className="icon" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartCard
