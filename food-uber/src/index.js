import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import { UserProvider } from "./context/UserContext"
import { FoodProvider } from "./context/FoodContext"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <FoodProvider>
    <UserProvider>
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Router>
      </React.Suspense>
    </UserProvider>
  </FoodProvider>,
  document.getElementById("root")
)
serviceWorker.register()
