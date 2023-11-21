import styled from 'styled-components';
import worldhellovideo from '/videos/worldhello.mp4';
import Intro from '../../ui/navigation/intro/Intro';

const StyledVideo = styled.div`
  display: flex;
  justify-content: center;

  // COVER THE FULL SCREEN OF EVERY DEVICE
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden;
  max-width: 100vw;
  max-height: 100vh;
  object-fit: contain;
  z-index: 0;

  // REMOVE CONTROLS DISPLAY AT BEGINNING OF video
  video::-webkit-media-controls-panel {
    display: none !important;
    opacity: 1 !important;
  }
`;

function VideoComponent() {
  return (
    <StyledVideo>
      <video autoPlay="autoPlay " loop muted playsInline={true}>
        <source src={worldhellovideo} type="video/mp4" />
      </video>
      <Intro />
    </StyledVideo>
  );
}

export default VideoComponent;
