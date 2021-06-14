/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';

const Cart = (props) => {
  const [displayedCart, setDisplayedCart] = useState([]);
  const { cartArray, incrementItem  } = props;
  
  useEffect(() => {
    setDisplayedCart(cartArray.map((data) => (
      <div key={data.item.offerId} className="card" id={data.item.offerId}>
        <div className="card-title"><h2>{data.item.items[0].name}</h2></div>
        <img className="card-icon" src={data.item.items[0].images.featured ? data.item.items[0].images.featured : data.item.items[0].images.icon} alt="item icon" />
        <div className="card-details">
          <h5>{data.item.items[0].description}</h5>
          {' '}
          <br />
          {' '}
        </div>
        <div className="card-price">
          <h6>
            {data.item.regularPrice}
            {' '}
            <img className="vbuck-icon" src="https://fortnite-api.com/images/vbuck.png" alt="vbuck icon" />
           <button type='button' onClick={()=>{ incrementItem(cartArray,data.item.offerId) } }>increment</button>
            {data.amount}
          </h6>

        </div>

      </div>
    )));
  }, [cartArray,incrementItem]);

  return (
    <div>
      {displayedCart}
    </div>
  );
};

export default Cart;
