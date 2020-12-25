import React, { useContext } from "react"

import { CartContext } from "../../context/CartContext"

import Banner from "../../components/banner/Banner"
import CartCard from "../../components/cart/Cart"
import MenuBar from "../../components/menu/MenuBar"
import FloatHeader from "../../components/floatHeader/FloatHeader"

const Cart = () => {
  let [cart, setCart] = useContext(CartContext)
  // console.log(cart[0].foodProps)
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
        </div>
      </div>
      <MenuBar />
    </div>
  )
}

export default Cart
