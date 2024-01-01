import styled from 'styled-components';

const StyledDesign = styled.div`
  display: inline-block;
  overflow: hidden;
  max-width: 100%;
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
      <video height="750" autoPlay="autoPlay" loop muted playsInline={true}>
        <source src={finalDesign.video} type="video/mp4" />
      </video>
    </StyledDesign>
  );
}

export default Design;
