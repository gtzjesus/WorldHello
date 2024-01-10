import styled from 'styled-components';
// import worldhellovideo from '/videos/worldhello.mp4';
import Button from '../../ui/buttons/Button';

import LazyLoad from 'react-lazyload';

const StyledAgency = styled.div`
  display: flex;
  justify-content: center;
  color: var(--color-white);
  background-image: url('backgrounds/landing.jpg');
  background-size: cover;

  // COVER THE FULL SCREEN OF EVERY DEVICE
  min-height: 100vh;
  min-width: 100vw;

  @media (min-width: 61.25em) {
    background-image: url('backgrounds/landing_second.jpg');
  }
`;

const Introduction = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--gap-medium);
  padding: var(--padding-small);

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
  font-size: var(--font-xlarge);
  letter-spacing: -0.3rem;
  text-transform: uppercase;
  line-height: 3.5rem;

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
  background-color: var(--color-tan);
  color: var(--color-black);

  padding: 0 var(--padding-xxsmall);
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
        <Introduction>
          <Title>Web</Title>
          <Title>
            Dev<Special>Agency.</Special>
          </Title>
          <Description>
            Websites engineered to turn visitors into
            <MiniDescription>
              <Special>customers.</Special>
            </MiniDescription>
          </Description>
          <Button variation="fourth" size="small">
            Start your website
          </Button>
        </Introduction>
      </StyledAgency>
    </LazyLoad>
  );
}

export default Agency;
