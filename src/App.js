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
  const [totalPrice,setTotalPrice] = useState(0);
  const [totalItems,setTotalItems]= useState(0);

  const addToCart = (item) => {
    setCartArray((prvState) => {
      if (prvState.filter((element) => element.item.offerId === item.offerId).length) {
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

  const giveTotalPrice = (array)=>{
    setTotalPrice(0)
    array.forEach(element=>{
      let price=0 ;
      if(element.amount<=1){
        console.log("unique")
         price = element.item.regularPrice;
         setTotalPrice(prvState=> prvState+price)
      }
      else {
         price = element.item.regularPrice * element.amount; 
         setTotalPrice(prvState=> prvState+price)
        }   
    })
  }


  const incrementItem = (array,id)=>{
      setCartArray(array.map(element => {
        if (element.item.offerId === id){
          element.amount += 1;
          return element;
        }
        return element
      }))
  }

  const decrementItem = (array,id)=>{
    setCartArray(array.map(element => {
      if (element.item.offerId === id){
        if(element.amount>1) {
          element.amount -= 1;
          return element 
        }
        return element;
      }
      return element
    }))
}
const deleteItem = (array,id)=>{
  setCartArray(array.filter(element => 
   element.item.offerId !== id
  ))
}
const getItemsNumber = (array)=>{
  let number = 0;
  array.forEach(element=>{
    number+=element.amount
  })
  setTotalItems(number)
}

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/shop">
            <Store cart={cartArray} addToCart={addToCart} giveTotalPrice={giveTotalPrice} totalPrice={totalPrice} />
          </Route>

          <Route exact path="/cart">
            <Cart cartArray={cartArray} incrementItem={incrementItem}
             decrementItem={decrementItem} deleteItem={deleteItem} totalPrice={totalPrice}  />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
