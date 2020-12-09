import React, { useContext, useState } from "react"
import axios from "axios"
import { UserContext } from "../../context/UserContext"
import { useEffect } from "react"

const OrderForm = ({ food }) => {
  let [user, setUser] = useContext(UserContext)
  let [loading, setLoading] = useState(false)
  let [formData, setFormdata] = useState({
    location: user.data && user.data.location ? user.data.location : "",
    special_description: "",
    delivery_time: "",
    number_of_plates: "",
    tel: user.data && user.data.tel ? user.data.tel : "",
    orderedBy: user.data && user.data.name ? user.data.name : "",
    address: user.data && user.data.address ? user.data.address : "",
  })

  function getLocation() {
    if (navigator.geolocation) {
      let x = navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(
            "Retrieved",
            position,
            position.coords.latitude,
            position.coords.longitude
          )
        },
        () => {
          console.log("Not retrieved")
        }
      )
      console.log(x)
    } else {
      console.log("Not supported")
    }
  }

  let {
    location,
    special_description,
    delivery_time,
    number_of_plates,
    tel,
    orderedBy,
    address,
  } = formData

  console.log(setUser, user.data)

  const handleChange = (e) => {
    let { name, value } = e.target
    setFormdata({
      ...formData,
      [name]: value,
    })
    console.log(formData)
  }

  let token = localStorage.getItem("token")

  const placeOrder = (e) => {
    e.preventDefault()
    setLoading(true)
    let config = {
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
    }
    let body = {
      location,
      special_description,
      delivery_time,
      number_of_plates,
      tel,
      orderedBy,
      address,
    }
    axios
      .post(`/order/${food.id}`, body, config)
      .then((res) => {
        console.log(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    getLocation()
  }, [getLocation])
  return (
    <form onSubmit={(e) => placeOrder(e)}>
      <textarea
        name="special_description"
        onChange={(e) => handleChange(e)}
        value={special_description}
        placeholder="describe"
      />
      <input
        type="text"
        name="location"
        onChange={(e) => handleChange(e)}
        value={location}
        placeholder="location"
      />
      <input
        type="text"
        name="address"
        onChange={(e) => handleChange(e)}
        value={address}
        placeholder="address"
      />
      <input
        type="number"
        name="number_of_plates"
        onChange={(e) => handleChange(e)}
        value={number_of_plates}
        placeholder="number of plates"
      />
      <input
        type="text"
        name="orderedBy"
        onChange={(e) => handleChange(e)}
        value={orderedBy}
        placeholder="name"
      />
      <input
        type="text"
        name="tel"
        onChange={(e) => handleChange(e)}
        value={tel}
        placeholder="tel"
      />
      <input
        type="date"
        name="delivery_time"
        onChange={(e) => handleChange(e)}
        value={delivery_time}
      />
      <button disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
    </form>
  )
}

export default OrderForm
