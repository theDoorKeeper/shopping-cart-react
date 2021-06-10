import React from 'react'
import logo from "../assets/logo.svg"
const Home = () => {
    return (
        <div className="main">
            <div className="title">
                <h1>Welcome to the Shop!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus mi eget auctor rutrum. Etiam sit amet dui elementum,
                     dignissim neque eget, efficitur sapien. Fusce volutpat quis diam vel laoreet.
                     Aenean quis imperdiet odio.
                      Duis vel nisi eu nulla dignissim faucibus.
                       Suspendisse lorem lacus, egestas sodales ultrices ve
                       </p>
            </div>
            <div className="logo">
                <img src={logo} alt="fortnine logo"/>
            </div>
        </div>
    )
}

export default Home
