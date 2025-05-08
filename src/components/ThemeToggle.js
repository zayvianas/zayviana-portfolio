import React from 'react';
import { useTheme } from '../ThemeContext';
import '../CSS/ThemeToggle.css'; 

const ThemeToggle = () => {
  const { mode, setMode, palette, setPalette } = useTheme();

  const toggleMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="theme-toggle-container">
      <button onClick={toggleMode} className="toggle-theme-btn">
        {mode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>

      <select
        value={palette}
        onChange={(e) => setPalette(e.target.value)}
        className="theme-select"
      >
        <option value="slipstream">🎨 Slipstream</option>
        <option value="ramen">🍜 Ramen</option>
      </select>
    </div>
  );
};

export default ThemeToggle;
