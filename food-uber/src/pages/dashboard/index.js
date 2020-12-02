import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
// import { UserContext } from "../../context/UserContext"

//components
import Header from "../../components/dashboard/header/Header"
import AsideLeft from "../../components/dashboard/aside/AsideLeft"

// import Home from "./pages/"
import Profile from "./Profile"

//styles
import "../../styles/pages/dashboard.sass"

const Dashboard = () => {
  // const [user, setUser] = useContext(UserContext)
  const [navOpen, setnavOpen] = useState(true)
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    if (window.screen.width <= 768) {
      setMobile(true)
    }
  }, [setMobile])

  const handleNav = () => {
    setnavOpen(!navOpen)
  }

  return (
    <div className={navOpen ? "dashboard" : "dashboard dashboard-dark"}>
      <Route
        render={({ location }) => (
          <div className="page-content">
            <>
              <Header navOpen={navOpen} handleNav={handleNav} />
              <AsideLeft
                asideOpen={navOpen ? "" : "side-nav-open"}
                isMobile={isMobile}
                setnavOpen={setnavOpen}
              />
              {isMobile && (
                <div
                  className={!navOpen ? "backdrop" : ""}
                  onClick={() => setnavOpen(true)}
                ></div>
              )}
              <Switch location={location} key={location.pathname}>
                <Route exact path={`/dashboard/`} key={`Home`}>
                  <main className={navOpen ? "main" : "main full-width"}>
                    <div />
                    Hello from home page
                  </main>
                </Route>
                <Route exact path={`/dashboard/profile`} key={`Home`}>
                  <main className={navOpen ? "main" : "main full-width"}>
                    <Profile />
                  </main>
                </Route>
              </Switch>
            </>
          </div>
        )}
      />
    </div>
  )
}

export default Dashboard
