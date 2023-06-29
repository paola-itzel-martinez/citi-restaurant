import { createGlobalStyle } from 'styled-components';
import { palette } from '../colors';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }

  body {
    background-color: ${palette.BACKGROUND};
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }

  #root {
    width: 100vw;
  }
`;
