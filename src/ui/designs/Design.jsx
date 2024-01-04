import styled from 'styled-components';

const StyledDesign = styled.div`
  display: inline-block;
  overflow: hidden;
  width: fit-content;
  height: fit-content;
  /* padding-bottom: 85%;
  padding-top: 40%; */
  @media (min-width: 40.25em) {
    /* padding-bottom: 75%;
    padding-top: 30%; */
    width: 100vw;
    height: 65vh;
  }

  @media (min-width: 150.15em) {
    /* padding-bottom: 30%; */
    /* padding-top: 25%; */
    width: 100vw;
    height: 95vh;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;
const Information = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  flex-direction: row;
  align-items: center;
  writing-mode: vertical-lr;
  text-orientation: upright;
  padding: 0 var(--padding-xsmall);
  z-index: var(--z-top);

  @media (min-width: 40.25em) {
    padding: 0 var(--padding-large);
  }

  @media (min-width: 78.15em) {
    writing-mode: horizontal-tb;
    padding: 0 var(--padding-xxlarge);
  }
`;

const Description = styled.span`
  display: none;
  font-size: var(--font-xsmall);
  color: var(--color-white);
  text-transform: uppercase;
  z-index: var(--z-top);

  @media (min-width: 40.25em) {
    display: block;
    font-size: var(--font-small);
  }

  @media (min-width: 78.15em) {
    display: block;
    font-size: var(--font-medium);
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
