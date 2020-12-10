import React, { useEffect, useState, useContext } from "react"
import { Switch, Route } from "react-router-dom"
import axios from "axios"
import { UserContext } from "./context/UserContext"
import { FoodContext } from "./context/FoodContext"

// pages
import Home from "./pages/"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
// import Menu from "./pages/Menu"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Help from "./pages/Help"

// user
import Cart from "./pages/user/Cart"
import Profile from "./pages/user/Profile"
import Favourites from "./pages/user/Favourites"
import Order from "./pages/user/Order"
import MyOrders from "./pages/user/MyOrders"

// admin
import Dashboard from "./pages/dashboard/"

// import logo
import logo from "./assets/images/logo.png"

// components
// import FoodModal from "./components/foodModal/FoodModal"
import OrderModal from "./components/orderModal/OrderModal"
import MenuBar from "./components/menu/MenuBar"

// styles
import "./styles/style.sass"

const Menu = React.lazy(() => import("./pages/Menu"))

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
          // console.log(res.data.results)
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
          <Route exact path="/menu" render={() => <Menu />} />
          <Route exact path="/cart" render={() => <Cart />} />
          <Route path="/order/:id" render={() => <Order />} />
          {/* auth routes */}
          <Route path="/dashboard" render={() => <Dashboard />} />
          <Route path="/my-orders/" render={() => <MyOrders />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route exact path="/favourites" render={() => <Favourites />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/contact" render={() => <Contact />} />
          <Route exact path="/help" render={() => <Help />} />
        </Switch>
      )}
      {/* <FoodModal /> */}
      <OrderModal />
      <MenuBar />
    </div>
  )
}

export default App
