import React from 'react';
import HeaderComponent from "./HeaderComponent"
import { Switch, Route } from "react-router-dom"
import Cart from "./Cart"
import Photos from "./Photos"
import Home from "./Home"

import './App.css';

function App() {

  return (
    <div className="App">
      <HeaderComponent />

      <Switch>
        <Route exact path="/" > <Home /></Route>
        <Route path="/photos" > <Photos /></Route>
        <Route path="/cart" > <Cart /></Route>

      </Switch>

    </div>
  );
}

export default App;
