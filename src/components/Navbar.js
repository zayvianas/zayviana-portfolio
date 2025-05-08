import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import ThemeToggle from './ThemeToggle'; 
import slipstreamLogo from './assets/slipstream-logo.png';
import ramenLogo from './assets/ramen-logo.png';

const Navbar = () => {
  const { palette } = useTheme();

  const getLogo = () => {
    switch (palette) {
      case 'ramen': return ramenLogo;
      case 'slipstream': return slipstreamLogo;
      default: return slipstreamLogo;
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={getLogo()} alt="Logo" />
      </div>
      
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/resume" className="navbar-link">Resume</Link>
        <Link to="/news" className="navbar-link">News</Link>
      
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
