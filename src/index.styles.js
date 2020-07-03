import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, 'Roboto', sans-serif;
    background-color: transparent;
  }
`;

export default GlobalStyle;
