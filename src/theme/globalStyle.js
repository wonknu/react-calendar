import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    height: 100%;
    width: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  .app {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 700px;
    margin: 0 auto;
  }
  .app > div {
    width: 100%;
  }
`;


export default GlobalStyle;