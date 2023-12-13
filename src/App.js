// App.js - willowmecreations.com - Artisanal Yarn Shop 
import React from "react";
import './Style.css';
import News from "./News";
import Contact from "./Contact";
import About from "./About";
import ProductListing from "./ProductListing";
import Cart from "./Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* Add more routes for different pages, shop, about, etc */}
      </div>
      <footer className="footer">
      <Footer />
      </footer>
    </Router>
  );
}

export default App;