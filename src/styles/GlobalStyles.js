import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {


  /* Responsive Designs */
    $bp-large: 78.15em; // 1250px
    $bp-medium: 61.25em; // 980px
    $bp-small: 40em; // 600px
    $bp-smallest: 31.25em; // 500px

  /* Width && Height */
    --width-description: 80%;
    --width-full-window: 100%;
    --width-half-window: 45vw;
    --width-filled-window: 100vw;
    --width-design-video: 80vw;

    --height-full-window: 100vh;
    --height-percentage-window: 100%;
    --height-row: 10rem;
    --height-arrow: 3vh;


    /* Backrounds */
    --background-primary: #070606;
    --background-secondary: #ffff;
    --background-third: #e7e167;


    /* Colors */
    --color-red: #991b1b;
    --color-black: #070606;
    --color-yellow: #e7e167;
    --color-white: #ffff;
    --color-blue: #279AEE;
    --color-green: #6A7744;
    --color-tan: #D4D187;

    /* Text Size */
    --font-xxsmall: 1.25rem;
    --font-xsmall: 0.90rem;
    --font-small: 1.5rem;
    --font-medium: 2.5rem;
    --font-large: 3rem;
    --font-xlarge: 4rem;


      /* Margin */
    --margin-xsmall: 0.75rem;
    --margin-small: 1rem;
    --margin-medium: 2rem;
    --margin-large: 3rem;
    --margin-xlarge: 4.5rem;


    --margin-nav-height: 8rem;


    /* Padding */
    --padding-xxsmall: 0.30rem;
    --padding-xsmall: 0.95rem;
    --padding-small: 1.25rem;
    --padding-medium: 2rem;
    --padding-large: 3rem;
    --padding-slarge: 5rem;
    --padding-xlarge: 7rem;
    --padding-xxlarge: 15rem;



    --padding-header:0.5rem 1rem;

    /* Gap */
    --gap-small: .25rem;
    --gap-medium: 1rem;
    --gap-large: 2rem;
    --gap-xlarge: 5rem;



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
