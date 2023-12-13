// Navigation.js - willowmecreations.com - Artisanal Yarn Shop
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="topnav">
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}

export default Navigation;