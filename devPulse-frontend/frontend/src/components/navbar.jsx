// Header.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <header className="header">
      <Link to="#" className="logo">
        <img src="./images/image.png" alt="" />
      </Link>
      <div className="fas fa-bars"></div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/careers">Career</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
