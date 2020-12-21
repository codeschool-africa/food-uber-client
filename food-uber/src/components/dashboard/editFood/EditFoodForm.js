import React, { useState, useEffect } from "react"
import axios from "axios"

const EditFoodForm = ({ foodToEdit }) => {
  let data
  if (foodToEdit && foodToEdit.length > 0) data = foodToEdit[0]
  let [food_image, setFood_Image] = useState(data && data.food_image)
  let [loading, setLoading] = useState(false)
  let [imgData, setImgData] = useState()
  let [formData, setFormData] = useState({
    Name: "",
    description: "",
    category: "",
    cost: "",
    featured: "",
  })

  const { Name, description, category, cost, featured } = formData

  //   console.log(Name, description, category, cost, featured)

  //   useEffect(() => {

  //   })

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

  const handleImageSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    let { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    let token = localStorage.getItem("token")
    let config = {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    }
    let body = {
      name: Name,
      description,
      category,
      cost,
      featured,
      //   food_image,
    }
    axios
      .post(`/update-food/${data.id}`, body, config)
      .then((res) => {
        console.log(res.data)
        setLoading(false)
        // setFoods({
        //   ...foods,
        // })
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }
  return (
    <div className="food-modal">
      <div className="container">
        {data && (
          <>
            <form onSubmit={(e) => handleImageSubmit(e)}>
              <input
                type="file"
                name="food_image"
                onChange={(e) => handleImgChange(e)}
              />
              {imgData && <img src={imgData} alt="" />}
            </form>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                name="Name"
                value={Name}
                onChange={(e) => handleChange(e)}
                placeholder="Food Name"
              />
              <textarea
                name="description"
                value={description}
                onChange={(e) => handleChange(e)}
                placeholder="place food description here"
              />
              <input
                type="number"
                name="cost"
                value={cost}
                onChange={(e) => handleChange(e)}
                placeholder="cost in Tshs"
              />
              <button disabled={loading}>
                {loading ? "Saving..." : "Save"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default EditFoodForm
