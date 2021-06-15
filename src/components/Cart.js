/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import './Cart.css'

const Cart = (props) => {
  const [displayedCart, setDisplayedCart] = useState([]);
  const { cartArray, incrementItem ,decrementItem, deleteItem } = props;
  
  useEffect(() => {
    setDisplayedCart(cartArray.map((data) => (
      <div key={data.item.offerId} className="checkout-card" id={data.item.offerId}>
        <div className="checkout-title"> 
        <div className="checkout-name" >{data.item.items[0].name} </div>
         <button type='button' className="delete-btn"  onClick={()=>{ deleteItem(cartArray,data.item.offerId) } }>x</button>
        </div>           
       <img className="checkout-icon" src={/* data.item.items[0].images.featured ? data.item.items[0].images.featured : */ data.item.items[0].images.icon} alt="item icon" />
        <div className="buttons">
          <button type='button' className="checkout-btn" onClick={()=>{ decrementItem(cartArray,data.item.offerId) } }>-</button>
            {data.amount}
             <button type='button' className="checkout-btn" onClick={()=>{ incrementItem(cartArray,data.item.offerId) } }>+</button>
        </div>
        <div className="checkout-price">
            {' '}{ (data.item.regularPrice)*(data.amount) }
            <img className="vbuck-icon-checkout" src="https://fortnite-api.com/images/vbuck.png" alt="vbuck icon" /> 

        </div>
      </div>
    )));
  }, [cartArray,incrementItem,decrementItem,deleteItem]);

  return (
    <div className="cart-wrapper" >
      <div className="bought-items">
      {displayedCart}
      </div>

      <div className="checkout-sidebar">
        <div className="sidebar-title">Checkout:</div>
        
      </div>
     
    </div>
  );
};

export default Cart;
