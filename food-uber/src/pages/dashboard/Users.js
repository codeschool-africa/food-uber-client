import React, { useEffect, useState } from "react"
import PageHeader from "../../components/dashboard/PageHeader"
import axios from "axios"

const Users = () => {
  let [users, setUsers] = useState(null)
  useEffect(() => {
    let token = localStorage.getItem("token")
    let config = {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    }
    axios
      .get("/users", config)
      .then((res) => {
        if (res.data && res.data.results) setUsers(res.data.results)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className="dashboard-content team">
      <div className="main-content">
        <PageHeader>Users</PageHeader>
      </div>
      <div className="dashboard-team">
        {users &&
          users.map(({ name, dp_path, role, id }) => (
            <div
              key={id}
              style={{
                width: "200px",
                margin: "20px",
                boxShadow: "0 0 20px rgba(0,0,0, .3)",
              }}
            >
              {dp_path && <img src={dp_path} alt="" />}
              <span>{name}</span>
              {role && role}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Users
