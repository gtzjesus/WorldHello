import styled from 'styled-components';

const StyledDesign = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  position: relative;
  padding-bottom: 85%;
  padding-top: 40%;
  @media (min-width: 40.25em) {
    padding-bottom: 75%;
    padding-top: 30%;
  }

  @media (min-width: 78.15em) {
  }
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Information = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  writing-mode: vertical-lr;
  text-orientation: upright;
  padding: 0 var(--padding-xsmall);

  @media (min-width: 40.25em) {
    padding: 0 var(--padding-large);
  }

  @media (min-width: 78.15em) {
  }
`;

const Description = styled.span`
  font-size: var(--font-xsmall);
  color: var(--color-white);
  text-transform: uppercase;
  z-index: var(--z-top);

  @media (min-width: 40.25em) {
    font-size: var(--font-small);
  }

  @media (min-width: 78.15em) {
  }
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
      <Video preload="auto" autoPlay="autoPlay" loop muted playsInline={true}>
        <source src={finalDesign.video} type="video/mp4" />
      </Video>
      <Information>
        <Description>{finalDesign.description}</Description>
      </Information>
    </StyledDesign>
  );
}

export default Design;
