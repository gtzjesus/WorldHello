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
`;

const Introduction = styled.div`
  position: absolute;
  bottom: 0;
  padding: var(--padding-medium);
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;
const Title = styled.span`
  font-size: var(--font-medium);
`;

function VideoComponent() {
  return (
    <StyledVideo>
      {/* <video autoPlay="autoPlay " loop muted playsInline={true}>
        <source src={worldhellovideo} type="video/mp4" />
      </video> */}
      <Introduction>
        <Title>Websites that convert visitors into customers</Title>
        <Button variation="primary" size="small">
          Start your website
        </Button>
      </Introduction>
    </StyledVideo>
  );
}

export default VideoComponent;
