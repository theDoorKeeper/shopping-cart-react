/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import './Cart.css';
import { motion } from 'framer-motion';
import rare from '../assets/rare.png';
import epic from '../assets/epic.png';
import legendary from '../assets/legendary.png';
import dc from '../assets/dc.webp';
import uncommon from '../assets/uncommon.png';
import mythical from '../assets/mythic.png';

const Cart = (props) => {
  const [displayedCart, setDisplayedCart] = useState([]);
  const {
    cartArray, incrementItem, decrementItem, deleteItem, totalPrice, giveTotalPrice, getItemsNumber,
    totalItems,
  } = props;

  const getCardBackground = (rarity) => {
    if (rarity === 'rare') {
      return rare;
    }
    if (rarity === 'epic') {
      return epic;
    }
    if (rarity === 'legendary') {
      return legendary;
    }
    if (rarity === 'dc') {
      return dc;
    }
    if (rarity === 'uncommon') {
      return uncommon;
    }
    if (rarity === 'myhtical') {
      return mythical;
    }
  };

  useEffect(() => {
    giveTotalPrice(cartArray);
  }, [cartArray, giveTotalPrice]);

  useEffect(() => {
    getItemsNumber(cartArray);
  }, [cartArray, getItemsNumber]);

  useEffect(() => {
    setDisplayedCart(cartArray.map((data) => (
      <motion.div
        key={data.item.offerId}
        className="checkout-card"
        id={data.item.offerId}
        style={{ backgroundImage: `url(${getCardBackground(data.item.items[0].rarity.value)})` }}
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="checkout-title">
          <div className="checkout-name">
            {data.item.items[0].name}
            {' '}
          </div>
          <button type="button" className="delete-btn" onClick={() => { deleteItem(cartArray, data.item.offerId); }}>x</button>
        </div>
        <img className="checkout-icon" src={data.item.items[0].images.icon} alt="item icon" />
        <div className="buttons">
          <button type="button" className="checkout-btn" onClick={() => { decrementItem(cartArray, data.item.offerId); }}>-</button>
          {data.amount}
          <button type="button" className="checkout-btn" onClick={() => { incrementItem(cartArray, data.item.offerId); }}>+</button>
        </div>
        <div className="checkout-price">
          {' '}
          { (data.item.regularPrice) * (data.amount) }
          <img className="vbuck-icon-checkout" src="https://fortnite-api.com/images/vbuck.png" alt="vbuck icon" />

        </div>
      </motion.div>
    )));
  }, [cartArray, incrementItem, decrementItem, deleteItem]);

  return (
    <div className="cart-wrapper">
      <div className="bought-items">
        <div className="checkout-header">
          total items :
          {' '}
          {totalItems}
          <br />
          total price :
          {totalPrice}
          <img className="vbuck-icon-checkout" src="https://fortnite-api.com/images/vbuck.png" alt="v buck incon" />
        </div>
        {displayedCart}
      </div>

    </div>
  );
};

export default Cart;
