import React, { useContext, useEffect } from "react"
import { MdClose } from "react-icons/all"
import { Link } from "react-router-dom"

import { CartContext } from "../../context/CartContext"

import "./foodModal.sass"
const FoodModal = ({ closeModal, foodProps }) => {
  const [cart, setCart] = useContext(CartContext)
  const { id, name, food_image, description, cost } = foodProps

  let check = cart.filter((o) => o.id == id)

  const saveLocalCarts = () => {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([]))
    } else {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }

  useEffect(() => {
    saveLocalCarts()
  }, [cart])

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
              disabled={check && check.length > 0 && true}
              onClick={() => {
                if (check && check.length > 0) {
                  return null
                } else {
                  if (check && check.length > 0) {
                    return null
                  } else {
                    setCart([...cart, foodProps])
                  }
                }
              }}
            >
              {check && check.length > 0 ? "Added to Cart" : "Add To Cart"}
            </button>
            <span onClick={closeModal}>Dismiss</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodModal
