import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
    min-height: 100vh;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    margin: 0 0 0.6em 0;
  }
  a {
    color: ${({ theme }) => theme.colors.electricBlue};
    text-decoration: none;
  }
`;

export default GlobalStyles;
