import styled from 'styled-components';
import Button from '../buttons/Button';

const StyledDesign = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: var(--width-design-video);
  color: var(--color-white);
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const Information = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  // ALIGN div MIDDLE
  box-sizing: border-box;
  width: var(--width-design-video);
  padding: var(--padding-medium) 0 0 0;
`;

const Creator = styled.span`
  display: flex;
  align-items: center;
  gap: var(--gap-small);
`;

const Additional = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: var(--padding-xlarge) 0 0 0;
`;

const Title = styled.span`
  font-size: var(--font-small);
`;
const Description = styled.span`
  font-size: var(--font-xsmall);
`;

const End = styled.div`
  position: absolute;
  width: var(--width-design-video);
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  padding: 0 0 var(--padding-medium) 0;
`;

function Design({ design }) {
  // CREATE design OBJECT to start displaying
  const finalDesign = {
    id: design.id,
    creator: design.creator,
    title: design.title,
    description: design.description,
    video: design.video,
    link: design.link,
  };

  // FUNCTION TO NAVIGATE TO design's link
  function handleNavigation() {
    window.location.href = finalDesign.link;
  }

  return (
    <StyledDesign onClick={handleNavigation}>
      <video autoPlay="autoPlay " loop muted playsInline={true}>
        <source src={finalDesign.video} type="video/mp4" />
      </video>
      <Information>
        <Creator>
          <img src="/logos/worldhello.png" alt="globe" />
          {finalDesign.creator}
        </Creator>
        <Additional>
          <Title>{finalDesign.title}</Title>
          <Description>{finalDesign.description}</Description>
        </Additional>
      </Information>
      <End>
        <Button variation="primary" size="small">
          visit website
        </Button>
      </End>
    </StyledDesign>
  );
}

export default Design;
