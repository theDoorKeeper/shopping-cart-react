/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import './Store.css';
import rare from "../assets/rare.png"
import epic from "../assets/epic.png"
import legendary from "../assets/legendary.png"
import dc from "../assets/dc.webp"
import uncommon from "../assets/uncommon.png"
import mythical from "../assets/mythic.png"
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


const Store = (props) => {
  const [category, setCategory] = useState('daily');
  const [itemArray, setItemArray] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  // eslint-disable-next-line react/prop-types
  const { addToCart } = props;

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
    else if(rarity==="dc"){
      return dc
    }
    else if(rarity==="uncommon"){
      return uncommon
    }
    else if(rarity==="myhtical"){
      return mythical
    }
  } 

  useEffect(() => {
    getData(category);
  }, [category]);

  useEffect(() => {
    setDisplayedItems(itemArray.map((item) => (
      <motion.div key={item.offerId} className="card" id={item.offerId} style={{backgroundImage: `url(${getCardBackground(item.items[0].rarity.value)})`}}  initial={{x:'-100vw'}} animate={{x:0}}>
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
            <motion.button type="button" className="card-buy " id={item.offerId} onClick={() => {
               addToCart(item);
             }} whileTap={{rotate:360}}>
            <FontAwesomeIcon icon={faCartPlus}/>
            </motion.button>
          </h6>

        </div>

      </motion.div>
    )));
  }, [itemArray,addToCart]);

  return (
    <motion.div className="store">
      <motion.div className="buttons" initial={{x:'-100vw'}} animate={{x:0}} transition={{duration:1}}>
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
      </motion.div>
      <div  className="catalogue">
        {displayedItems}
      </div>
    </motion.div>
  );
};

export default Store;
