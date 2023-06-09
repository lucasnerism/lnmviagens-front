import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
  }

  body{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
  a{
    text-decoration: none;
    color: inherit ;
  }
`;

export default GlobalStyle;