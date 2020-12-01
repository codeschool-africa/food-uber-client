import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
import axios from "axios"

// components
import Home from "./pages/"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"

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
        <h1>
          Loading <br />
          Please Wait
        </h1>
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
