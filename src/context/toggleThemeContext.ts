import React from 'react';

const ToggleThemeContext = React.createContext({ theme: 'light', toggleTheme: () => {} });

export default ToggleThemeContext;
