// Footer.js - willowmecreations.com - Artisanal Yarn Shop
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="contact-info">
        <h2>Email:</h2>
        <p>
          <a href="mailto:bethany@willowmecreations.com">bethany@willowmecreations.com</a>
        </p>
      </div>

      <div className="social-media">
        <h2>Follow Me</h2>
        <p>
          <a href="https://instagram.com/" target="new" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>{" "}
          <br />
          <a href="https://facebook.com/" target="new" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>{" "}
          <br />
          <a href="https://tiktok.com/bethanyrhodes6" target="new" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i> TikTok
          </a>
        </p>
      </div>

      <div className="quick-links">
        <h2>Quick Links</h2>
        <p>
          <a href="index.html">Home</a> | <a href="about.html">About</a> | <a href="products.html">Products</a> |{" "}
          <a href="contact.html">Contact</a>
        </p>
      </div>

      <div className="privacy-policy">
        <h2>Privacy Policy</h2>
        <p>
          <a href="privacy.html">Read our privacy policy</a>
        </p>
      </div>

      <div className="copyright">
        <h2>&copy; 2024 Willow Me Creations</h2>
      </div>
    </div>
  );
}

export default Footer;
