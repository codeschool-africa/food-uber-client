import React, { useState, useContext } from "react"
import axios from "axios"
import { FoodContext } from "../../../context/FoodContext"

import "./foodModal.sass"

const FoodModal = ({ setClose, food }) => {
  let [food_image, setFood_Image] = useState(null)
  let [loading, setLoading] = useState(false)
  let [imgData, setImgData] = useState(null)
  let [foods, setFoods] = useContext(FoodContext)
  let [formData, setFormData] = useState({
    Name: "",
    description: "",
    category: [],
    cost: "",
    featured: 0,
  })
  const { Name, description, category, cost, featured } = formData

  const handleImgChange = (e) => {
    if (e.target.files) {
      // setFood_Image(e.target.files[0])
      const reader = new FileReader()
      reader.addEventListener("load", () => {
        setImgData(reader.result)
        setFood_Image(reader.result)
      })
      reader.readAsDataURL(e.target.files[0])
      // console.log(dp, imgData)
    }
  }

  const handleChange = (e) => {
    let { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    console.log(formData)
  }

  const handleCheckBoxChange = async (e) => {
    let checkedItem = formData.category
    if (e.target.checked) {
      checkedItem.push(e.target.value)
    } else {
      checkedItem.remove(checkedItem, (obj) => {
        return obj === e.target.value
      })
    }
    setFormData({ ...formData, category: checkedItem })
    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    let token = localStorage.getItem("token")
    // let data = new FormData()
    // data.append("food_image", food_image)
    // let foodDetails = {
    //   name
    // }
    let config = {
      headers: {
        "Content-Type":
          // "application/json; multipart/form-data; boundary=AaB03x",
          "application/json",
        authorization: token,
      },
    }
    let body = {
      name: Name,
      description,
      category,
      cost,
      featured,
      food_image,
    }
    axios
      .post("/add-food", body, config)
      .then((res) => {
        console.log(res.data)
        setLoading(false)
        setFoods({
          ...foods,
        })
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }
  return (
    <div className="food-modal">
      <div className="food-backdrop" />
      <div className="container">
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{
            padding: "30px",
          }}
        >
          <input
            type="file"
            name="food_image"
            onChange={(e) => handleImgChange(e)}
          />
          {imgData && <img src={imgData} alt="" />}
          <input
            type="text"
            name="Name"
            onChange={(e) => handleChange(e)}
            placeholder="Food Name"
          />
          <textarea
            name="description"
            onChange={(e) => handleChange(e)}
            placeholder="place food description here"
          />
          <input
            type="number"
            name="cost"
            onChange={(e) => handleChange(e)}
            placeholder="cost in Tshs"
          />
          <input
            type="radio"
            name="featured"
            onChange={(e) => handleChange(e)}
            value={1}
          />
          Set Featured
          <h3>Categories</h3>
          <div className="checkbox-group">
            <div className="checkbox">
              <input
                type="checkbox"
                name="category"
                id="web"
                value="Cereals"
                onChange={(e) => handleCheckBoxChange(e)}
              />{" "}
              <label htmlFor="web">Cereals</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="category"
                id="design"
                value="Cake"
                onChange={(e) => handleCheckBoxChange(e)}
              />{" "}
              <label htmlFor="design">Cake</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="category"
                id="graphics"
                value="Chicken"
                onChange={(e) => handleCheckBoxChange(e)}
              />{" "}
              <label htmlFor="graphics">Chicken</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="category"
                id="app"
                value="Rice"
                onChange={(e) => handleCheckBoxChange(e)}
              />{" "}
              <label htmlFor="app">Rice</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="category"
                id="mobile-application"
                value="fruits"
                onChange={(e) => handleCheckBoxChange(e)}
              />{" "}
              <label htmlFor="mobile-application">Fruits</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="category"
                id="web-application"
                value="Steak"
                onChange={(e) => handleCheckBoxChange(e)}
              />{" "}
              <label htmlFor="web-application">Steak</label>
            </div>
          </div>
          <button disabled={loading}>{loading ? "Saving..." : "Save"}</button>
        </form>
      </div>
    </div>
  )
}

export default FoodModal
