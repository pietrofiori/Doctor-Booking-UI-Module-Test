import * as dateFns from "date-fns";
import { ptBR } from "date-fns/locale";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;

  }

  html {
    font-size: 62.5%;
  }

  body {
    scroll-behavior: smooth;
    line-height: 1.5;
    font-family: "${(props) => props.theme.fontFamilies.primary}";
    font-weight: ${(props) => props.theme.fontWeight.regular};
    font-size: ${(props) => props.theme.fontSizes.body.bodyNormal};
    color: ${(props) => props.theme.colors.gray.text};
    background-color: ${(props) => props.theme.colors.white.bg};
    -webkit-font-smoothing: antialiased;
  }


  input, button, textarea, select {
    font: inherit;
    border: none;
    outline: none;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    text-wrap: balance;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fontFamilies.primary};
  }

  p {
    font-family: ${(props) => props.theme.fontFamilies.secondary};
  }

 img, picture, video, canvas, svg {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .no-scroll {
    overflow: hidden;
  }
`;

dateFns.setDefaultOptions({ locale: ptBR });

export default GlobalStyle;
