import React from 'react';

type ToggleThemeProps = {
  theme: string;
  toggleTheme: () => void;
  children: React.ReactElement[];
};

const ToggleThemeContext = React.createContext({ theme: 'light', toggleTheme: () => {} });

const useToggleThemeContext = () => {
  const toggleThemeContext = React.useContext(ToggleThemeContext);
  if (!toggleThemeContext) {
    throw new Error('[ToggleThemeContext]: Toggle theme context has not been properly initiated');
  }

  return toggleThemeContext;
};

const ToggleThemeProvider = ({ theme, toggleTheme, children }: ToggleThemeProps) => (
  <ToggleThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ToggleThemeContext.Provider>
);

export { useToggleThemeContext, ToggleThemeProvider };
