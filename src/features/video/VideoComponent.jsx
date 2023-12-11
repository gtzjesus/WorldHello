import styled from 'styled-components';
import worldhellovideo from '/videos/worldhello.mp4';
import Button from '../../ui/buttons/Button';

const StyledVideo = styled.div`
  display: flex;
  justify-content: center;
  color: var(--color-white);

  // COVER THE FULL SCREEN OF EVERY DEVICE
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden;

  max-height: 100vh;
  max-width: 100vw;

  object-fit: contain;
  z-index: 0;
  // REMOVE CONTROLS DISPLAY AT BEGINNING OF video

  // BLACK AND WHITE
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  video::-webkit-media-controls-panel {
    display: none !important;
    opacity: 1 !important;
  }
`;

const Introduction = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;

  padding: var(--margin-medium);
  gap: var(--gap-medium);
`;

const Title = styled.span`
  font-size: var(--font-medium);
`;

function VideoComponent() {
  return (
    <StyledVideo>
      <video autoPlay="autoPlay " loop muted playsInline={true}>
        <source src={worldhellovideo} type="video/mp4" />
      </video>
      <Introduction>
        <Title>Websites that turn your visitors into customers</Title>

        <Button variation="primary" size="small">
          Start your website
        </Button>
      </Introduction>
    </StyledVideo>
  );
}

export default VideoComponent;
