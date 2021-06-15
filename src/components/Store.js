/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import './Store.css';
import rare from "../assets/rare.png"
import epic from "../assets/epic.png"
import legendary from "../assets/legendary.png"
import common from "../assets/common.png"
import uncommon from "../assets/ucommon.png"
import mythical from "../assets/mythic.png"




const Store = (props) => {
  const [category, setCategory] = useState('daily');
  const [itemArray, setItemArray] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  // eslint-disable-next-line react/prop-types
  const { cart, addToCart , giveTotalPrice , totalPrice} = props;

  const getData = async (type) => {
    const response = await fetch('https://fortnite-api.com/v2/shop/br', { mode: 'cors' });
    const jsonfile = await response.json();
    setItemArray(jsonfile.data[type].entries);
  };

    const getCardBackground = (rarity)=>{
    if(rarity==="rare"){
      return rare
    }
    else if(rarity==="epic"){
      return epic
    }
    else if(rarity==="legendary"){
      return legendary
    }
    else if(rarity==="common"){
      return common
    }
    else if(rarity==="uncommon"){
      return uncommon
    }
    else if(rarity==="myhtical"){
      return mythical
    }
  } 

  useEffect(() => {
    console.log('cartaray', cart);
    giveTotalPrice(cart)
  }, [cart,giveTotalPrice]);

  useEffect(() => {
    getData(category);
  }, [category]);

  useEffect(() => {
    setDisplayedItems(itemArray.map((item) => (
      <div key={item.offerId} className="card" id={item.offerId} /* style={{background-image: item.items[0].rarity.value === "rare" ? "rgba(0, 0, 0, 0.555)" : 'black'}} */>
        <div className="card-title"><h2>{item.items[0].name}</h2></div>
        <img className="card-icon" src={item.items[0].images.featured ? item.items[0].images.featured : item.items[0].images.icon} alt="item icon" />
        <div className="card-details">
          <h5>{item.items[0].description}</h5>
          {' '}
          <br />
          {' '}
        </div>
        <div className="card-price">
          <h6>
            {item.regularPrice}
            {' '}
            <img className="vbuck-icon" src="https://fortnite-api.com/images/vbuck.png" alt="vbuck icon" />
            <button type="button" className="card-buy " id={item.offerId} onClick={() => {
               addToCart(item);
             }}>
              {' '}
              <span>Add to cart </span>
            </button>
          </h6>

        </div>

      </div>
    )));
  }, [itemArray,addToCart]);

  useEffect(() => {
    console.log('total Price',totalPrice)
  }, [totalPrice]);

  return (
    <div className="store">
      <div className="buttons">
        <button type="button" className="category-btn" id="daily" onClick={() => { setCategory('daily'); }}>
          {' '}
          <span>daily</span>
          {' '}
        </button>
        <button type="button" className="category-btn" id="special-daily" onClick={() => { setCategory('specialDaily'); }}>
          {' '}
          <span>Special daily</span>
          {' '}
        </button>
        <button type="button" className="category-btn" id="featured" onClick={() => { setCategory('featured'); }}>
          {' '}
          <span>featured</span>
          {' '}
        </button>
        <button type="button" className="category-btn" id="special-featured" onClick={() => { setCategory('specialFeatured'); }}>
          <span> Special featured</span>
          {' '}
        </button>
      </div>
      <div className="catalogue">
        {displayedItems}
      </div>
      {totalPrice}
    </div>
  );
};

export default Store;
