import React, { Component } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/search";

import "./App.css";

function App() {
    return (
      <Router>
       <div>
         <Nav />
         <Switch>
         <Route exact path="/" component={Books} />
         <Route exact path="/search" component={Books} />
         <Route exact path="/saved" component={Books} />

         </Switch>

      </div>
  </Router>
    );
}

export default App;
