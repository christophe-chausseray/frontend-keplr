import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from './screens/Movie/List/ListPage';
import DetailsPage from './screens/Movie/Details/DetailsPage';
import useTheme from './hooks/useTheme';
import { lightTheme, darkTheme } from './themes';
import { ToggleThemeProvider } from './context/ToggleThemeContext';

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
    font-family: Roboto, "Material Icons";
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

  return (
    <ThemeProvider theme={themeMode}>
      <ToggleThemeProvider theme={theme} toggleTheme={toggleTheme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path='/' component={ListPage} />
            <Route path='/details/:movieId' component={DetailsPage} />
          </Switch>
        </Router>
      </ToggleThemeProvider>
    </ThemeProvider>
  );
}

export default App;
