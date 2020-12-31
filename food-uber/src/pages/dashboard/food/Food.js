import React, { useContext, useState } from "react"
import { FoodContext } from "../../../context/FoodContext"
import { Link } from "react-router-dom"

// components
import PageHeader from "../../../components/dashboard/PageHeader"
import "../../../styles/pages/foods.sass"

const Food = () => {
  let [foods, setFoods] = useContext(FoodContext)
  const remove = (id) => {
    window.confirm()
    if (window.confirm) {
    } else {
    }
  }
  return (
    <div className="dashboard-content foods">
      <div className="main-content">
        <PageHeader>Foods</PageHeader>
        <div className="dashboard-foods">
          <div>
            <div className="foods">
              <div className="top">
                <Link to="/dashboard/food/new">Add New Food</Link>
              </div>
              <div className="showcase">
                {foods.loading ? (
                  <>Please Wait</>
                ) : (
                  <>
                    {foods.data &&
                      foods.data.map(
                        ({
                          name,
                          id,
                          food_image,
                          description,
                          cost,
                          plates,
                        }) => (
                          <div className="food-card" key={id}>
                            <div className="img-container">
                              <img src={food_image} alt={name} />
                            </div>
                            <div className="food-content">
                              <h3>
                                {name} <span>Tshs{cost}</span>
                              </h3>
                              <p className="plates">
                                <span>{plates && plates > 0 && plates}</span>
                                <span
                                  className={
                                    plates && plates > 0 ? "success" : "error"
                                  }
                                >
                                  {plates && plates > 0
                                    ? "Available"
                                    : "Out of stock"}
                                </span>
                              </p>
                              <p>{description}</p>
                              <div className="btns">
                                <Link
                                  className="edit"
                                  to={`/dashboard/food/edit-food?q=${id}`}
                                >
                                  Edit
                                </Link>
                                <span
                                  className="delete"
                                  onClick={() => remove(id)}
                                >
                                  Remove
                                </span>
                                <Link
                                  className="orders"
                                  to={`/dashboard/food/orders/food?q=${id}`}
                                >
                                  View orders
                                </Link>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Food
