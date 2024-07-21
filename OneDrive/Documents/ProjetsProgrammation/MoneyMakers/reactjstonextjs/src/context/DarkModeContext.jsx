import React, { createContext, useState, useEffect, useContext } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState'; // Assuming you have this custom hook

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState('isDarkMode', false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(darkModeMediaQuery.matches);
      darkModeMediaQuery.addEventListener('change', (e) => {
        setIsDarkMode(e.matches);
      });
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
