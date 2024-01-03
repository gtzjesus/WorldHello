import styled from 'styled-components';
// import worldhellovideo from '/videos/worldhello.mp4';
import Button from '../../ui/buttons/Button';

const StyledVideo = styled.div`
  display: flex;
  justify-content: center;
  color: var(--color-white);

  background-image: url('/backgrounds/landing.png');
  background-size: cover;

  // COVER THE FULL SCREEN OF EVERY DEVICE
  min-height: 100vh;
  min-width: 100vw;

  @media (min-width: 61.25em) {
    background-image: url('/backgrounds/landing_second.png');
    /* Use filter to add blur effect */
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
    right: 0;
    gap: var(--gap-large);
    padding: var(--padding-large);
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
`;

const Special = styled.span`
  color: var(--color-green);
  background-color: var(--color-white);
  padding: 0 var(--padding-xxsmall);
`;

const MiniDescription = styled.span`
  font-size: var(--font-small);

  @media (min-width: 61.25em) {
    font-size: var(--font-medium);
  }
`;
const Description = styled.span`
  font-size: var(--font-xsmall);

  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }
`;

function Agency() {
  return (
    <StyledVideo>
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
        <Button variation="secondary" size="small">
          Start your website
        </Button>
      </Introduction>
    </StyledVideo>
  );
}

export default Agency;

{
  /* <video autoPlay="autoPlay " loop muted playsInline={true}>
        <source src={worldhellovideo} type="video/mp4" />
      </video> */
}
