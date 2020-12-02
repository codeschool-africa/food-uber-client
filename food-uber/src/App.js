import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
import axios from "axios"

// components
import Home from "./pages/"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"

// import logo
import logo from "./assets/images/logo.png"

// styles
import "./styles/style.sass"

axios.defaults.baseURL = "http://faraja-food-uber.herokuapp.com/api"

const App = () => {
  let [loading, setLoading] = useState(true)
  useEffect(() => {
    axios
      .get("/get-featured-foods")
      .then((res) => {
        setLoading(false)
        console.log(res.data)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }, [])
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
        </Switch>
      )}
    </div>
  )
}

export default App
