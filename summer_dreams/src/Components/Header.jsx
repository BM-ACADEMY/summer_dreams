// Header.js
import React, { useState } from 'react';
import '../style/Header.css';
import logo from '../assets/logo1.png'; // Adjust path as needed

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // New function to handle link clicks
  const handleLinkClick = () => {
    setIsMenuVisible(false); // Close the menu
  };

  return (
    <header className="site-header">
      <div className="header-wrapper">
        {/* Logo */}
        <div className="brand-logo">
          <img src={logo} alt="Site Logo" height={100} className="logo-image" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation */}
        <nav className={`navigation ${isMenuVisible ? 'show-mobile' : ''}`}>
          <ul className="nav-items">
            <li><a href="#" style={{ color: 'red' }} onClick={handleLinkClick}></a></li>
            <li><a href="#home" style={{ color: 'red' }} onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about" style={{ color: 'red' }} onClick={handleLinkClick}>About</a></li>
            <li><a href="#services" style={{ color: 'red' }} onClick={handleLinkClick}>Services</a></li>
            <li><a href="#testimonials" style={{ color: 'red' }} onClick={handleLinkClick}>Testimonials</a></li>
            <li><a href="#contact" style={{ color: 'red' }} onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;