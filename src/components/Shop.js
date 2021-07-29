/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-filename-extension */
import "./Shop.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
  } from 'react-router-dom';
  import React, { useState } from 'react';
  import Navbar from './Navbar';
  import Home from './Home';
  import Store from './Store';
  import Cart from './Cart';
  import { AuthProvider, useAuth } from './AuthProvider';
  
  function Shop() {
    const [cartArray, setCartArray] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [error, setError]=useState("");
    const { currentUser, logout } = useAuth();  
    const history = useHistory();
    const addToCart = (item) => {
      setCartArray((prvState) => {
        if (prvState.filter((element) => element.item.offerId === item.offerId).length) {
          return prvState.map((element) => {
            if (element.item.offerId === item.offerId) {
              element.amount += 1;
              return element;
            }
            return element;
          });
        }
  
        return prvState.concat({ item, amount: 1 });
      });
    };
  
    const giveTotalPrice = (array) => {
      setTotalPrice(0);
      array.forEach((element) => {
        let price = 0;
        if (element.amount <= 1) {
          price = element.item.regularPrice;
          setTotalPrice((prvState) => prvState + price);
        } else {
          price = element.item.regularPrice * element.amount;
          setTotalPrice((prvState) => prvState + price);
        }
      });
    };
  
    const incrementItem = (array, id) => {
      setCartArray(array.map((element) => {
        if (element.item.offerId === id) {
          element.amount += 1;
          return element;
        }
        return element;
      }));
    };
  
    const decrementItem = (array, id) => {
      setCartArray(array.map((element) => {
        if (element.item.offerId === id) {
          if (element.amount > 1) {
            element.amount -= 1;
            return element;
          }
          return element;
        }
        return element;
      }));
    };
    const deleteItem = (array, id) => {
      setCartArray(array.filter((element) => element.item.offerId !== id));
    };
    const getItemsNumber = (array) => {
      let number = 0;
      array.forEach((element) => {
        number += element.amount;
      });
      setTotalItems(number);
    };
  
    const handleLogout = async () =>{ 
            setError("")
            try{
                await logout()
                history.push("/login") 
            }
            catch(err){
                setError(err.message)
            }
        }
    return (
    
       <Router>
           <AuthProvider>
        <div className="App">
          <Navbar getItemsNumber={getItemsNumber} totalItems={totalItems} cartArray={cartArray} />
            welcome {currentUser && currentUser.email}
            <button onClick={()=>handleLogout()}> log Out </button>
            {error}
          <Switch>
  
            <Route exact path="/home">
              <Home />
            </Route>
  
            <Route exact path="/store">
              <Store addToCart={addToCart} />
            </Route>
  
            <Route exact path="/cart">
              <Cart
                cartArray={cartArray}
                incrementItem={incrementItem}
                decrementItem={decrementItem}
                deleteItem={deleteItem}
                totalPrice={totalPrice}
                totalItems={totalItems}
                getItemsNumber={getItemsNumber}
                giveTotalPrice={giveTotalPrice}
              />
            </Route>
  
          </Switch>
        </div>
         </AuthProvider>
      </Router> 
         
    );
  }
  
  export default Shop;
  