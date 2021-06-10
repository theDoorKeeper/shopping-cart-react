import React from 'react'
import {NavLink} from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    return (
        <div>
            <ul>
                <li id="home">
                    <NavLink activeClassName="active" className="nav-element" exact to="/"> home </NavLink>
                </li>

                <li>
                <NavLink activeClassName="active" className="nav-element" exact to="/shop"> shop </NavLink>
                </li>

                <li>
                <NavLink activeClassName="active" className="nav-element" exact to="/cart"> cart </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
