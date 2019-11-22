import { createGlobalStyle } from 'styled-components/macro';
import { BASE_FONT_SIZE } from './constants';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: ${BASE_FONT_SIZE}px;
  }

  body {
    background-color: #8b8b8b;
    background-color: #e3e3e3;

    min-width: 300px;
  }
`;

export default GlobalStyle;
