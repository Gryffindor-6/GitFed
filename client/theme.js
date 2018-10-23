import { injectGlobal } from 'styled-components';
import WebFonts from 'webfontloader';

import 'normalize.css';

WebFonts.load({
  google: {
    families: ['Roboto', 'Roboto Slab']
  }
});

const theme = Object.freeze({
  fonts: {
    primary: 'Roboto',
    secondary: 'Roboto Slab'
  },
  colors: {
    white: '#FFFFFF',
    black: '#111111'
  }
});

injectGlobal`
  body {
    /* box */
    background-color: ${theme.colors.white};
    height: 100vh;

    /* text */ 
    color: ${theme.colors.black};
    font-family: ${theme.fonts.primary};
    font-size: 1.1em;
  }

  /* top-level React container */
  div#root {
    /* display */
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* box */
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.secondary};
  }
`;

export default theme;
