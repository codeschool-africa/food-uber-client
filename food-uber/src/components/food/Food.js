import React, { useState } from "react"
import FoodModal from "../foodModal/FoodModal"

//
import "./food.sass"

const Food = ({ name, id, food_image, description, cost }) => {
  // const [cart, setCart] = useState([])
  let [open, setOpen] = useState(false)
  const openModal = () => {
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
  }

  let foodProps = {
    name,
    id,
    food_image,
    description,
    cost,
  }
  return (
    <>
      <div className="food" key={id} onClick={openModal}>
        <div className="img-container">
          <img src={food_image} alt={name} />
        </div>
        <div className="food-content">
          <h3>{name}</h3>
          {/* <p>{description}</p> */}
          <p>{cost} Tshs</p>
          <div className="btns">
            {/* <button>Preview</button> */}
            <button className="btn-primary" onClick={openModal}>
              Preview
            </button>
          </div>
        </div>
      </div>
      {open && (
        <FoodModal
          // setOpen={setOpen}
          closeModal={closeModal}
          foodProps={foodProps}
        />
      )}
    </>
  )
}

export default Food
