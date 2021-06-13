/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-filename-extension */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Store from './components/Store';

import Cart from './components/Cart';

function App() {
  const [cartArray, setCartArray] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/shop">
            <Store cart={cartArray} setCartArray={setCartArray} />
          </Route>

          <Route exact path="/cart">
            <Cart cartArray={cartArray} />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
