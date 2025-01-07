import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  button {
    font-family: inherit;
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }

  section {
    padding: 4rem 2rem;
    scroll-margin-top: 4rem;

    @media (max-width: 768px) {
      padding: 3rem 1rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
