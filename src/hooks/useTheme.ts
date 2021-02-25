import { useState, useEffect } from 'react';

const useTheme = (): { theme: string; toggleTheme: () => void } => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if ('light' === theme) {
      localStorage.setItem('currentTheme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('currentTheme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('currentTheme');

    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme('light');
      localStorage.setItem('currentTheme', 'light');
    }
  }, []);

  return { theme, toggleTheme };
};

export default useTheme;
