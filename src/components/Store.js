import React, { useEffect, useState } from 'react';
import './Store.css';

const Store = (props) => {
  const [category, setCategory] = useState('daily');
  const [itemArray, setItemArray] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  // eslint-disable-next-line react/prop-types
  const { cart, addItem } = props;

  const getData = async (type) => {
    const response = await fetch('https://fortnite-api.com/v2/shop/br', { mode: 'cors' });
    const jsonfile = await response.json();
    setItemArray(jsonfile.data[type].entries);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    getData(category);
  }, [category]);

  useEffect(() => {
    setDisplayedItems(itemArray.map((item) => (
      // eslint-disable-next-line react/jsx-filename-extension
      <div key={item.items[0].id} className="card" id={item.items[0].id}>
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
            <button type="button" className="card-buy " id={item.items[0].id} onClick={() => { addItem(item); }}>
              {' '}
              <span>Add to cart </span>
            </button>
          </h6>

        </div>

      </div>
    )));
  }, [itemArray]);

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
    </div>
  );
};

export default Store;
