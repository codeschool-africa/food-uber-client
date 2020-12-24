import React, { useContext } from "react"

import { CartContext } from "../../context/CartContext"

import Banner from "../../components/banner/Banner"
import CartCard from "../../components/cart/Cart"
import MenuBar from "../../components/menu/MenuBar"
import FloatHeader from "../../components/floatHeader/FloatHeader"

const Cart = () => {
  let [cart, setCart] = useContext(CartContext)
  // console.log(cart)
  return (
    <div className="menu">
      <FloatHeader />
      <Banner>
        <div className="banner__headline">
          <h1>Cart</h1>
        </div>
      </Banner>
      <div className="cart-container">
        <div className="container">
          {cart &&
            cart.map(({ id, name, description, food_image, cost }) => (
              <CartCard
                id={id}
                name={name}
                description={description}
                food_image={food_image}
                cost={cost}
                key={id}
              />
            ))}
        </div>
      </div>
      <MenuBar />
    </div>
  )
}

export default Cart
