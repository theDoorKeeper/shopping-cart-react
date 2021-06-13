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

  const addToCart = (item) => {
    setCartArray((prvState) => {
      if (!prvState.length) {
        /*      console.log("empty") */
        return prvState.concat({ item, amount: 1 });
      } if (prvState.filter((element) => element.item.offerId === item.offerId).length) {
        return prvState.map((element) => {
          if (element.item.offerId === item.offerId) {
            console.log(element.amount);
            element.amount += 1;
            return element;
          }
          return element;
        });
      }

      return prvState.concat({ item, amount: 1 });
    });
  };

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/shop">
            <Store cart={cartArray} addToCart={addToCart} />
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
