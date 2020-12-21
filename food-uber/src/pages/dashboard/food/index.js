import React from "react"
import { Switch, Route } from "react-router-dom"

import Food from "./Food"
import NewFood from "./NewFood"
import EditFood from "./EditFood"

const Foods = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/dashboard/food">
          <Food />
        </Route>
        <Route exact path="/dashboard/food/new">
          <NewFood />
        </Route>
        <Route path="/dashboard/food/:slug">
          <EditFood />
        </Route>
      </Switch>
    </div>
  )
}

export default Foods
