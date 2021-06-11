import React from 'react'
import logo from "../assets/logo.svg"
import "./Home.css"
const Home = () => {
    return (
        <div className="main">
            <div className="title">
                <h1>Welcome to the Shop!</h1>
                <p>
                    Take a look at our discounted new Skins!<br></br>
                    brag to your friends with you rare shiny Backpack
                 </p>
            </div>
            <div className="logo">
                <img src={logo} alt="fortnine logo" className="filter"/>
            </div>
        </div>
    )
}

export default Home
