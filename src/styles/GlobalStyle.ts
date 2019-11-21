import { createGlobalStyle } from 'styled-components/macro';
import { BASE_FONT_SIZE } from './constants';

const GlobalStyle = createGlobalStyle`
  body {
    /* margin: 0;
    padding: 0; */
    background-color: #8b8b8b;
    background-color: #e3e3e3;

    font-size: ${BASE_FONT_SIZE}px;
  }
`;

export default GlobalStyle;
