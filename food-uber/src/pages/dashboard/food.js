import React, { useContext, useState } from "react"
import { FoodContext } from "../../context/FoodContext"

// components
import FoodModal from "../../components/dashboard/foodModal/FoodModal"
import PageHeader from "../../components/dashboard/PageHeader"

const Food = () => {
  let [foods, setFoods] = useContext(FoodContext)
  let [open, setOpen] = useState(false)
  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }
  return (
    <div className="dashboard-content foods">
      <div className="main-content">
        <PageHeader>Foods</PageHeader>
        <div className="dashboard-foods">
          <div>
            <div className="foods">
              <div className="showcase">
                {/* .top */}
                {foods &&
                  foods.data &&
                  foods.data.map(
                    ({ name, id, food_image, description, cost }) => (
                      <>
                        <div className="food" key={id}>
                          <div className="img-container">
                            <img src={food_image} alt={name} />
                          </div>
                          <div className="food-content">
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <p>{cost} Tshs</p>
                            <div className="btns">
                              <button onClick={openModal}>Edit</button>
                            </div>
                          </div>
                        </div>
                        {open && <FoodModal closeModal={closeModal} food />}
                      </>
                    )
                  )}
              </div>
            </div>
            {open && <FoodModal closeModal={closeModal} food />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Food
