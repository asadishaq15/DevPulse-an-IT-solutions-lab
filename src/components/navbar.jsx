import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'; 
import Logo from "../../src/images/devPulse.jpg"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <BrowserRouter>
    <header className="header">
      <Link to="/" className="logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className={`fas fa-bars ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}></div>
      <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/services">services</Link></li>
          <li><Link to="/portfolio">portfolio</Link></li>
          <li><Link to="/team">team</Link></li>
          <li><Link to="/careers">career</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </nav>
    </header>
    </BrowserRouter>
  );
};

export default Header;
