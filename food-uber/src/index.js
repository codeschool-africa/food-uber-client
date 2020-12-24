import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import { UserProvider } from "./context/UserContext"
import { FoodProvider } from "./context/FoodContext"
import { CartProvider } from "./context/CartContext"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <FoodProvider>
    <UserProvider>
      <CartProvider>
        <React.Suspense
          fallback={
            <div className="loader-page">
              <div className="lds-ellipsis">
                <div />
                <div />
                <div />
              </div>
            </div>
          }
        >
          <Router>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </Router>
        </React.Suspense>
      </CartProvider>
    </UserProvider>
  </FoodProvider>,
  document.getElementById("root")
)
serviceWorker.register()
