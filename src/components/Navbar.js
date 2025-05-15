import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import ThemeToggle from './ThemeToggle'; 
import slipstreamLogo from './assets/slipstream-logo.png';
import ramenLogo from './assets/ramen-logo.png';

const Navbar = () => {
  const { palette } = useTheme();

  const getBranding = () => {
    switch (palette) {
      case 'ramen':
        return {
          logo: ramenLogo,
          tagline: 'こんにちは世界'
        };
      case 'slipstream':
        return {
          logo: slipstreamLogo,
          tagline: 'hello world'
        };
      default:
        return {
          logo: slipstreamLogo,
          tagline: 'hello world'
        };
    }
  };

  const { logo, tagline } = getBranding();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="navbar-tagline">{tagline}</span>
        <img src={logo} alt="Logo" className="logo-img" />
        
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
