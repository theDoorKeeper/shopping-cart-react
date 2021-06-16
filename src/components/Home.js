/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';
import './Home.css';

const Home = () => (
  <div className="main">
    <motion.div className="title" animate={{ x: 0 }} transition={{ duration: 0.8 }} initial={{ x: '-100vw' }}>
      <h1>Welcome to the Shop!</h1>
      <p>
        Take a look at our discounted new Skins!
        <br />
        brag to your friends with you rare shiny Backpack
      </p>
    </motion.div>
    <motion.div className="logo" animate={{ x: 0 }} transition={{ duration: 0.8 }} initial={{ x: '100vw' }}>
      <img src={logo} alt="fortnine logo" className="filter" />
    </motion.div>
  </div>
);

export default Home;
