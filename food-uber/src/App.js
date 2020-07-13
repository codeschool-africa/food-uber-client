import React from 'react';
import { Switch, Route } from "react-router-dom"

import Home from "./pages/home"
import Register from "./pages/register"
import Login from "./pages/login"
import Error from "./pages/error"

function App () {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
