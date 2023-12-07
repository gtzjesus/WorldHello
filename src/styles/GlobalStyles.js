import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {

  /* Width && Height */
    --width-description: 80%;
    --width-full-window: 100%;
    --width-half-window: 45vw;
    --width-filled-window: 100vw;
    --width-design-video: 35vh;

    --height-full-window: 100vh;
    --height-percentage-window: 100%;
    --height-row: 10rem;
    --height-arrow: 3.5vh;


  /* Backrounds */
  --background-primary: #070606;
  --background-secondary: #f7ead9;

  /* Colors */
  --color-red: #991b1b;
  --color-black: #070606;
  --color-yellow: #e7e167;
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
    --gap-small: .25rem;
    --gap-medium: 1rem;

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
