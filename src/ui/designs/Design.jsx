import styled from 'styled-components';

const StyledDesign = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.15rem solid var(--color-black);
  max-width: var(--width-design-video);
`;

const Information = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
`;

const Creator = styled.span``;
const Title = styled.span``;
const Description = styled.span``;
const Category = styled.span``;

function Design({ design }) {
  // CREATE design OBJECT to start displaying
  const finalDesign = {
    id: design.id,
    creator: design.creator,
    title: design.title,
    description: design.description,
    category: design.category,
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
        <Creator>{finalDesign.creator}</Creator>
        <Title>{finalDesign.title}</Title>
        <Category>{finalDesign.category}</Category>
        <Description>{finalDesign.description}</Description>
      </Information>
    </StyledDesign>
  );
}

export default Design;
