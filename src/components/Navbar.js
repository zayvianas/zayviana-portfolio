import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Zayviana</h2>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/resume" className="navbar-link">Resume</Link>
        <Link to="/news" className="navbar-link">News</Link>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
