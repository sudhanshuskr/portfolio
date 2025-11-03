import React, { useState } from 'react'; // ✅ add useState here

import { Link } from 'react-router-dom';  // Use Link to navigate between pages
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      {/* Logo */}
      <div className="logo">
        <span className="logo-dark">Sudhanshu Shankar</span>
        <span className="logo-faded">Portfolio</span>
      </div>

      {/* Nav */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;