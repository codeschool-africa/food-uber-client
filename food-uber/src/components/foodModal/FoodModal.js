import React, { useState } from "react"
import { MdClose } from "react-icons/all"
import { Link } from "react-router-dom"

import "./foodModal.sass"
const FoodModal = ({ closeModal, foodProps }) => {
  const [cart, setCart] = useState([])
  const { id, name, food_image, description, cost } = foodProps
  return (
    <div className="food-modal">
      <div className="food-modal-backdrop"></div>
      <div className="food-modal-content" key={id}>
        <span onClick={closeModal} className="close">
          <MdClose className="icon" />
        </span>
        <div className="img-container">
          <img src={food_image} alt={name} />
        </div>
        <div className="food-content">
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{cost} Tshs</p>
          <div className="order">
            <Link className="btn-primary" to={`/order/food?q=${id}`}>
              Order this food
            </Link>
          </div>
          <div className="btns">
            {/* <button>Preview</button> */}
            <button
              className="btn-primary"
              onClick={() => {
                setCart([...cart, id])
              }}
            >
              Add to Cart
            </button>
            <span onClick={closeModal}>Dismiss</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodModal
