import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Homepage from './screens/Homepage';

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
  return (
    <>
      <GlobalStyle />
      <Homepage />
    </>
  );
}

export default App;