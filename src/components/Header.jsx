import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';  

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`flex justify-between items-center p-4 bg-gray-800 bg-opacity-50 backdrop-blur-md fixed top-0 left-0 w-full z-50`}>
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="md:text-2xl text-sm font-semibold text-white">Sudhanshu Shankar</span>
        <span className="md:text-2xl text-sm text-gray-300">Portfolio</span>
      </div>

      {/* Nav */}
      <nav className={`flex flex-col md:flex-row md:space-x-10 md:items-center ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0">
          <li><Link to="/" className="text-sm md:text-lg text-white hover:text-amber-500" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/achievements" className="text-sm md:text-lg text-white hover:text-amber-500" onClick={() => setMenuOpen(false)}>Achievements</Link></li>
          <li><Link to="/projects" className="text-sm md:text-lg text-white hover:text-amber-500" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" className="text-sm md:text-lg text-white hover:text-amber-500" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>

      {/* Hamburger icon */}
      <div className="md:hidden flex flex-col justify-center items-center space-y-2" onClick={() => setMenuOpen(!menuOpen)}>
        {/* First bar */}
        <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        {/* Second bar */}
        <div className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        {/* Third bar */}
        <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </div>
    </header>
  );
}

export default Header;
