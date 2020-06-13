import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
    line-height: 1.41;
    user-select: none;
  }

  button:focus {
    outline: none;
  }

  img {
    -webkit-user-drag: none;
  }
`;

export default GlobalStyles;
