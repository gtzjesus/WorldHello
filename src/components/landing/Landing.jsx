// File: Landing.js
// Description: React component for displaying landing page (first thing USER sees).
// Figma Design.
// LazyLoading from React for optimization (images & web app loading time).
// Global Styles from /src/styles/ used for global variables.

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import LazyLoad from 'react-lazyload';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
//

const StyledLanding = styled.div`
  // Code logic for setting the background
  // Design background from Figma software
  background: url('backgrounds/landing.jpg');
  background-size: cover;

  text-transform: uppercase;

  // Code logic for covering full-screen devices
  min-height: 100vh;
  min-width: 100vw;

  // @MEDIAQUERY logic for bigger devices (responsive design)
  @media (min-width: 61.25em) {
    // Design background from Figma software
    background-image: url('backgrounds/landing_second.jpg');
  }
`;

const Hook = styled.div`
  // Code logic for positioning all information inside our hook
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--height-navigation-padding) var(--padding-small);

  // @MEDIAQUERY logic for bigger devices
  @media (min-width: 61.25em) {
    top: 0;
    left: 0;
    gap: var(--gap-large);
    padding: var(--padding-large);
  }
  @media (min-width: 78.15em) {
    padding: var(--padding-xxlarge);
  }
`;

const Title = styled.span`
  // Code logic for title element
  font-size: var(--font-xlarge);
  letter-spacing: var(--spacing-title);
  line-height: var(--line-height-small);
  // Code logic shadow beneath text (more visibility)
  text-shadow: var(--text-shadow-font);

  // @MEDIAQUERY logic for bigger devices (responsive design)
  @media (min-width: 61.25em) {
    font-size: var(--font-xxlarge);
    line-height: var(--line-height-medium);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-xxxlarge);
    line-height: var(--line-height-large);
  }
`;

const Subtitle = styled.span`
  // Code logic for subtitle element
  font-size: var(--font-xsmall);
  letter-spacing: var(--spacing-subtitle);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Landing() {
  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledLanding>
        {/* <!-- Hook Container --> */}
        <Hook>
          {/* TODO: <!-- Span Elements Vertically Messy Implementation --> */}
          <Title>Web</Title>
          <Title>Dev</Title>
          <Title>Agency</Title>
          <br />
          <br />
          <br />
          <Subtitle>Get a </Subtitle>
          <Subtitle>website</Subtitle>
          <Subtitle>to tranform</Subtitle>
          <Subtitle>your visitors</Subtitle>
          <Subtitle>into customers.</Subtitle>
          <br />
          <Button variation="primary" size="small">
            click to start
          </Button>
        </Hook>
      </StyledLanding>
    </LazyLoad>
  );
}

// Export the Component (reusable)
export default Landing;
