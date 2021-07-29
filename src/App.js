/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-filename-extension */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React from 'react';
/* import './App.css'; */
import SignUp from './components/SignUp';
import { AuthProvider} from './components/AuthProvider';
import Shop from './components/Shop';
import Login from './components/Login';

function App() {
  return (
<<<<<<< HEAD
  
     <Router> 
      <AuthProvider>
      <Switch >
        <Route exact path="/signUp" component={SignUp}/>
        <Route exact path="/" component={Login}/>
        <Route exact path="/shop" component={Shop}/>
      </Switch> 
     </AuthProvider>
  
     </Router> 
 
=======
    <Router>
      <div className="App">
        <Navbar getItemsNumber={getItemsNumber} totalItems={totalItems} cartArray={cartArray} />

        <Switch>

          <Route exact path="/shopping-cart-react">
            <Home />
          </Route>

          <Route exact path="/shop">
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
    </Router>
>>>>>>> 853399391bafc8a94072903336e23b9c1087ffa1
  );
}

export default App;
