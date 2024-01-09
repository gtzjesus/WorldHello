import styled from 'styled-components';

const StyledDesign = styled.div`
  display: inline-block;
  overflow: hidden;
  width: fit-content;
  height: fit-content;
  width: 100vw;
  height: 85vh;
  /* padding-bottom: 85%;
  padding-top: 40%; */
  @media (min-width: 40.25em) {
    /* padding-bottom: 75%;
    padding-top: 30%; */
    width: 100vw;
    height: 80vh;
  }

  @media (min-width: 78.25em) {
    /* padding-bottom: 75%;
    padding-top: 30%; */
    width: 100vw;
    height: 80vh;
  }

  @media (min-width: 150.15em) {
    /* padding-bottom: 30%; */
    /* padding-top: 25%; */
    width: 100vw;
    height: 90vh;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
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
    </StyledDesign>
  );
}

export default Design;
