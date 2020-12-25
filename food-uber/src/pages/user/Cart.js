import React, { useContext } from "react"

import { CartContext } from "../../context/CartContext"

import Banner from "../../components/banner/Banner"
import CartCard from "../../components/cart/Cart"
import MenuBar from "../../components/menu/MenuBar"
import FloatHeader from "../../components/floatHeader/FloatHeader"

const Cart = () => {
  let [cart, setCart] = useContext(CartContext)
  let amount = (item) => {
    return item.cost * item.number
  }

  let sum = (prev, next) => {
    return prev + next
  }

  let totalCost = cart.map(amount).reduce(sum)

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="menu">
      <FloatHeader />
      <Banner>
        <div className="banner__headline">
          <h1>Cart</h1>
        </div>
      </Banner>
      <div className="cart-container">
        <div
          className="container"
          style={{
            padding: "20px 0 70px",
          }}
        >
          <div
            style={{
              textAlign: "right",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            {totalCost && `total cost = ${totalCost}`}
          </div>
          {cart &&
            cart.map(({ id, name, description, food_image, cost, number }) => (
              <CartCard
                id={id}
                name={name}
                description={description}
                food_image={food_image}
                cost={cost}
                number={number}
                key={id}
              />
            ))}
          <div
            style={{
              textAlign: "right",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            {totalCost && `total cost = ${totalCost}`}
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            style={{
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <button
              className="btn"
              style={{
                width: "100%",
                background: "red",
                margin: "20px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              Check Out
            </button>
          </form>
        </div>
      </div>
      <MenuBar />
    </div>
  )
}

export default Cart
