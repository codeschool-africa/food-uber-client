import React, { useContext } from "react"
import { FoodContext } from "../../context/FoodContext"

// components
import FoodModal from "../../components/dashboard/foodModal/FoodModal"
import PageHeader from "../../components/dashboard/PageHeader"

const Food = () => {
  let [foods, setFoods] = useContext(FoodContext)
  console.log(setFoods)
  return (
    <div className="dashboard-content foods">
      <div className="main-content">
        <PageHeader>Foods</PageHeader>
      </div>
      <div className="dashboard-foods">
        <div>
          <div className="foods">
            <div className="showcase">
              {foods &&
                foods.data &&
                foods.data.map(
                  ({ name, id, food_image, description, cost }) => (
                    <div className="food" key={id}>
                      <div className="img-container">
                        <img src={food_image} alt={name} />
                      </div>
                      <div className="food-content">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p>{cost} Tshs</p>
                        <div className="btns">
                          <button>Edit</button>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
          {foods && <FoodModal />}
        </div>
      </div>
    </div>
  )
}

export default Food
