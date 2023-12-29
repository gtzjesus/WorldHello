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

  padding: var(--padding-medium);
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--gap-medium);
`;

const Title = styled.span`
  font-size: var(--font-xlarge);
  letter-spacing: -0.3rem;
  text-transform: uppercase;
`;

const MiniDescription = styled.span`
  font-size: var(--font-medium);
  color: var(--color-green);
`;
const Description = styled.span`
  font-size: var(--font-small);
`;

function VideoComponent() {
  return (
    <StyledVideo>
      <Introduction>
        <Title>Website Dev Agency</Title>
        <Description>
          Websites that convert visitors into
          <MiniDescription> customers</MiniDescription>.
        </Description>
        <Button variation="secondary" size="small">
          Start your website
        </Button>
      </Introduction>
    </StyledVideo>
  );
}

export default VideoComponent;

{
  /* <video autoPlay="autoPlay " loop muted playsInline={true}>
        <source src={worldhellovideo} type="video/mp4" />
      </video> */
}
