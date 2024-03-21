import { createGlobalStyle } from "styled-components";

export const colorPrimary = '#ffcb47'

export const StylesGlobais = createGlobalStyle`

  :root {
    --colorPrimary: ${colorPrimary}
  }

  .titulo {
    font-family: Elsie Swash Caps;
    font-weight: 900;
    line-height: 48.38px;
    text-align: left;
    color: #202020;
  }

  .subtitulo {
    font-family: Montserrat;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
    color: #8a8a8a;
  }

  .sombra {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }  
`;