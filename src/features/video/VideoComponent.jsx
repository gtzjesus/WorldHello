import styled from 'styled-components';
import worldhellovideo from '/videos/worldhello.mp4';
import Button from '../../ui/buttons/Button';

const StyledVideo = styled.div`
  display: flex;
  justify-content: center;
  color: var(--color-white);

  // BETTER WAY TO SHOW TEXT OVER VIDEO
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  // COVER THE FULL SCREEN OF EVERY DEVICE
  overflow-y: hidden;
  overflow-x: hidden;
  max-height: 100vh;
  max-width: 100vw;
  object-fit: contain;
  z-index: 0;
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
      <video muted="true" loop="true" playsInline={true}>
        <source src={worldhellovideo} type="video/mp4" />
      </video>
      <Introduction>
        <Title>Websites that transform visitors into customers.</Title>
        <Button>Start your website</Button>
      </Introduction>
    </StyledVideo>
  );
}

export default VideoComponent;
