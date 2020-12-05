import React, { useEffect, useState, useContext } from "react"
import { Switch, Route } from "react-router-dom"
import axios from "axios"
import { UserContext } from "./context/UserContext"
import { FoodContext } from "./context/FoodContext"

// components
import Home from "./pages/"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"

import Dashboard from "./pages/dashboard/"

// import logo
import logo from "./assets/images/logo.png"

// styles
import "./styles/style.sass"

axios.defaults.baseURL = "http://faraja-food-uber.herokuapp.com/api"
// axios.defaults.baseURL = "http://localhost:5000/api"

const App = () => {
  let [user, setUser] = useContext(UserContext)
  let [foods, setFoods] = useContext(FoodContext)
  let [loading, setLoading] = useState(true)
  useEffect(() => {
    let token = localStorage.getItem("token")
    let config = {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    }
    axios
      .get("/auth", config)
      .then((res) => {
        // setLoading(false)
        if (res.data) {
          setUser({
            ...user,
            isAuthenticated: true,
            data: res.data.results,
          })
        }
      })
      .catch((err) => {
        // setLoading(false)
        console.log(err)
      })
  }, [user, setUser])
  useEffect(() => {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    axios
      .get("/get-foods", config)
      .then((res) => {
        setLoading(false)
        if (res.data) {
          // console.log(res.data)
          setFoods({
            ...foods,
            data: res.data.results,
          })
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }, [foods, setFoods])
  return (
    <div className="App">
      {loading ? (
        <div className="loading-screen">
          <div className="container">
            <img src={logo} alt="logo" />
            <span>Please Wait...</span>
          </div>
        </div>
      ) : (
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/signup" render={() => <Signup />} />
          {/* auth routes */}
          <Route path="/dashboard" render={() => <Dashboard />} />
        </Switch>
      )}
    </div>
  )
}

export default App
