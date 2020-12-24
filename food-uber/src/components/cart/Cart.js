import React, { useState } from "react"

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
  return (
    <div className="cart-card">
      <div className="img-container">
        <img src={food_image} alt={name} />
      </div>
      <div className="cart-details">
        <div className="name">{name}</div>
        <div className="cost">&#64; Tshs {cost}</div>
        <div className="counter">
          <span onClick={minus}>-</span>
          <span>{number}</span>
          <span onClick={add}>+</span>
        </div>
      </div>
    </div>
  )
}

export default CartCard
