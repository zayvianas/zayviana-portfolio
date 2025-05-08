import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const [palette, setPalette] = useState('slipstream');

  useEffect(() => {
    document.body.className = `${palette} ${mode}`;
  }, [mode, palette]);

  return (
    <ThemeContext.Provider value={{ mode, setMode, palette, setPalette }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = () => useContext(ThemeContext);
