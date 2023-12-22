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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--gap-medium);
  padding: var(--padding-medium);
`;

const Title = styled.span`
  font-size: var(--font-xlarge);
  letter-spacing: -0.3rem;
  text-transform: uppercase;
  line-height: 4rem;
`;

const MiniDescription = styled.span`
  font-size: var(--font-small);
  color: var(--color-blue);
`;
const Description = styled.span`
  font-size: var(--font-xsmall);
`;

function VideoComponent() {
  return (
    <StyledVideo>
      <Introduction>
        <MiniDescription>WorldHello</MiniDescription>
        <Title>
          Website Develop-
          <br />
          ment
          <br /> Agency
        </Title>
        <Description>
          Websites that convert visitors into
          <MiniDescription> customers</MiniDescription>.
        </Description>
        <Button variation="primary" size="small">
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
