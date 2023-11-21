import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {

  /* Width && Height */
    --width-description: 80%;
    --width-full-window: 100%;
    --width-half-window: 45vw;
    --width-filled-window: 100vw;


    --height-full-window: 100vh;
    --height-percentage-window: 100%;

    --height-row: 10rem;


  /* Backrounds */
  --background-primary: #ebdac4;
  --background-secondary: #f7ead9;
  --background-tile: #fff5e8;



  /* Colors */
  --color-red: #991b1b;
  --color-black: #070606;
  --color-white: #ffff;
  --color-tan: #f7ead9;

  /* Text Size */
  --font-xsmall: 1.5rem;
  --font-small: 2rem;
  --font-medium: 3rem;
  --font-large: 4rem;


      /* Margin */
    --margin-xsmall: 0.75rem;
    --margin-small: 1rem;
    --margin-medium: 2rem;
    --margin-large: 3rem;
    --margin-xlarge: 5rem;


    --margin-nav-height: 8rem;


    /* Padding */
    --padding-xxsmall: 0.30rem;
    --padding-xsmall: 0.75rem;
    --padding-small: 1.25rem;
    --padding-medium: 2rem;
    --padding-large: 3rem;
    --padding-slarge: 5rem;
    --padding-xlarge: 7rem;


    --padding-header:0.5rem 1rem;

    /* Gap */
    --gap-small: 1rem;
    --gap-medium: 2rem;

    /* Image Sizes */
    --image-small: 8rem;
    --image-medium: 12.5rem;
    --image-large: 30rem;

    /* Z-Indexes */
    --z-top: 9999;
    --z-second: 9998;
    --z-third: 9997;

}
`;

export default GlobalStyles;
