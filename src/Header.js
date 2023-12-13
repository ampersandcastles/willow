// Header.js - willowmecreations.com - Artisanal Yarn Shop
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <img src="img/logo.png" alt="Willow Me Creations logo" className="logo" />
            <div className="topnav">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/news">News</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </div>

    );
}

export default Header;