// File: Agency.js
// Description: React component for displaying landing page (first thing USER sees)
// Figma Design

import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

import LazyLoad from 'react-lazyload';

const StyledAgency = styled.div`
  // BACKGROUND IMAGE CONFIGURATION
  background: url('backgrounds/landing.jpg');
  background-size: cover;

  // COVER THE FULL SCREEN OF EVERY DEVICE
  min-height: 100vh;
  min-width: 100vw;

  @media (min-width: 61.25em) {
    background-image: url('backgrounds/landing_second.jpg');
  }
`;

const Intro = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--height-navigation-padding) var(--padding-small);

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

const Subtitle = styled.span`
  font-size: var(--font-small);
  letter-spacing: -0.05rem;
  text-transform: uppercase;
`;

const Title = styled.span`
  font-size: var(--font-xlarge);
  letter-spacing: -0.3rem;
  text-transform: uppercase;
  line-height: 3.5rem;
  text-shadow: 4px 3px 5px rgba(0, 0, 0, 0.5);

  @media (min-width: 61.25em) {
    font-size: var(--font-xxlarge);
    line-height: 4.5rem;
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-xxxlarge);
    line-height: 6.5rem;
  }
`;

const Special = styled.span`
  color: var(--color-black);
  padding: 0 var(--padding-xxsmall);
  margin: var(--margin-small) 0;
`;

const MiniDescription = styled.span`
  font-size: var(--font-small);

  @media (min-width: 61.25em) {
    font-size: var(--font-medium);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-xlarge);
  }
`;
const Description = styled.span`
  font-size: var(--font-xsmall);

  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-large);
  }
`;

function Agency() {
  return (
    <LazyLoad>
      <StyledAgency>
        <Intro>
          {/* MESSI IMPLEMENTATION BUT HAD TO DO UNIQUE DESIGN FOR MOBILE DEVICES (VERTICAL span ELEMENTS) */}
          <Title>Web</Title>
          <Title>Dev</Title>
          <Title>Agency</Title>
          <Subtitle>Get a </Subtitle>
          <Subtitle>website</Subtitle>
          <Subtitle>to tranform</Subtitle>
          <Subtitle>your visitors</Subtitle>
          <Subtitle>into customers</Subtitle>
        </Intro>
        <Button variation="primary" size="small">
          Start your website
        </Button>
      </StyledAgency>
    </LazyLoad>
  );
}

export default Agency;
