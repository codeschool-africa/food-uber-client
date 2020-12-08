import React, { useEffect, useState } from "react"
import axios from "axios"
import PageHeader from "../../components/dashboard/PageHeader"

const Orders = () => {
  let [notifications, setNotifications] = useState()
  let token = localStorage.getItem("token")
  useEffect(() => {
    let config = {
      headers: {
        authorization: token,
      },
    }
    axios
      .get("/notifications", config)
      .then((res) => {
        console.log(res.data)
        if (res.data.results) {
          setNotifications(res.data.results)
          console.log(notifications)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [setNotifications, notifications])
  return (
    <div className="dashboard-content notifications">
      <div className="main-content">
        <PageHeader>Notifications</PageHeader>
      </div>
      <div className="dashboard-notifications">
        <div className="orders">
          <div className="container">
            {notifications &&
              notifications.map(({ id, orderedBy, // createdAt, // status,
                // read_status,
                food_name, number_of_plates, delivery_time }) => (
                <div key={id}>
                  {orderedBy} has ordered {number_of_plates} plates of{" "}
                  {food_name} which should be delivered at {delivery_time}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
