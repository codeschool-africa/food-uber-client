import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import { UserProvider } from "./context/UserContext"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <UserProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </UserProvider>,
  document.getElementById("root")
)
serviceWorker.register()
