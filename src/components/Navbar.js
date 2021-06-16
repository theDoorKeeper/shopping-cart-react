/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => { 
  const {getItemsNumber , totalItems, cartArray} = props;
  useEffect(() => {
    getItemsNumber(cartArray)

  }, [getItemsNumber, cartArray])
  return(<div>
    <ul>
      <li id="home">
        <NavLink activeClassName="active" className="nav-element" exact to="/"> home </NavLink>
      </li>

      <li>
        <NavLink activeClassName="active" className="nav-element" exact to="/shop"> shop </NavLink>
      </li>

      <li>
        <NavLink activeClassName="active" className="nav-element" exact to="/cart"> <div style={{ position: "relative" }}>
    <FontAwesomeIcon icon={faShoppingCart} />
    <span style={{ position: "absolute" }}>2</span>
</div></NavLink>
      </li>
    </ul>
  </div>)
};

export default Navbar;
