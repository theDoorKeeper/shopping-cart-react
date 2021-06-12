import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css"
import Home from "./components/Home";
import Store from "./components/Store";
import React, { useState } from 'react'
import Cart from "./components/Cart";
function App() {
  const [cartArray,setCartArray]=useState([]);

  const addToCart =(item)=>{
    setCartArray(prevState=>prevState.concat(item))
}
  return (
    <Router> 
    <div className="App">
      <Navbar/>

    <Switch>

      <Route exact path="/">
      <Home/>
      </Route>


      <Route exact path="/shop">
      <Store cart={cartArray} addItem={addToCart}/>
      </Route>

      <Route exact path="/cart">
      <Cart cart={cartArray} />
      </Route>

    </Switch>
    </div>
    </Router>
  ); 
}

export default App;
