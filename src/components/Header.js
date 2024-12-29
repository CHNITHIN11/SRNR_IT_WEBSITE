import React from 'react';
import '../styles/Home.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <span>📍 SR Nagar, new police station</span>
        <span>📞 +92 31304754657</span>
        <span>📧 srnritsolutions@gmail.com</span>
      </div>
      <div className="navbar">
        <div className="logo">SRNR IT Solutions</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#faq">FAQ's</a></li>
          </ul>
        </nav>
        <a href="#contact" className="contact-btn">Contact Us</a>
      </div>
    </header>
  );
};

export default Header;