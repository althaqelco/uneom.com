"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: 'light',
  setTheme: () => null,
};

const ThemeContext = createContext<ThemeProviderState>(initialState);

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.add('light');
    }
  }, []);

  const changeTheme = (newTheme: Theme) => {
    // Remove the previous theme class
    document.documentElement.classList.remove('light', 'dark');
    // Add the new theme class
    document.documentElement.classList.add(newTheme);
    // Store in localStorage
    localStorage.setItem('theme', newTheme);
    // Update state
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext); 