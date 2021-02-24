import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Homepage from './screens/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailsPage from './screens/DetailsPage';
import useTheme from './hooks/useTheme';
import { lightTheme, darkTheme } from './themes';
import ToggleThemeContext from './context/toggleThemeContext';

const GlobalStyle = createGlobalStyle`
 html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    margin: 0;
    overflow: hidden;
  }
  h1 {
    margin: 0;
  }
  body {
    font-family: ui-sans-serif;
  }
  ul {
    display: block;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
  }
`;

function App() {
  const { theme, toggleTheme } = useTheme();
  const themeMode = 'light' === theme ? lightTheme : darkTheme;

  console.log(theme, themeMode);
  return (
    <ThemeProvider theme={themeMode}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/details/:movieId' component={DetailsPage} />
          </Switch>
        </Router>
      </ToggleThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
