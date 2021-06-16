/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Navbar = (props) => { 
  const {getItemsNumber , totalItems, cartArray} = props;
  useEffect(() => {
    getItemsNumber(cartArray)

  }, [getItemsNumber, cartArray])
  return(<div>
    <motion.ul initial={{y:-250}} animate={{y:0}} transition={{duration:0.5}}>
      <li id="home">
        <NavLink activeClassName="active" className="nav-element" exact to="/"> home </NavLink>
      </li>

      <li>
        <NavLink activeClassName="active" className="nav-element" exact to="/shop"> shop </NavLink>
      </li>

      <li>
        <NavLink activeClassName="active" className="nav-element" exact to="/cart"> <div style={{ position: "relative" }}>
    <FontAwesomeIcon icon={faShoppingCart} />
    <span style={{ position: "absolute" }}>{totalItems}</span>
</div></NavLink>
      </li>
    </motion.ul>
  </div>)
};

export default Navbar;
