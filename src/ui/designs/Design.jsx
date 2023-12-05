import styled from 'styled-components';
import { useNavigate } from 'react-router';

const StyledDesign = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.15rem solid var(--color-black);
  max-width: 35vh;
`;

const Creator = styled.span``;
const Title = styled.span``;
const Description = styled.span``;
const Category = styled.span``;

function Design({ design }) {
  // GRAB NAVIGATION HOOK
  const navigate = useNavigate();
  // CREATE design OBJECT to start displaying
  const finalDesign = {
    id: design.id,
    creator: design.creator,
    title: design.title,
    description: design.description,
    category: design.category,
    video: design.video,
  };

  // FUNCTION TO NAVIGATE TO design's link
  function handleNavigation() {
    navigate(finalDesign.link);
  }

  return (
    <StyledDesign onClick={handleNavigation}>
      <video autoPlay="autoPlay " loop muted playsInline={true}>
        <source src={finalDesign.video} type="video/mp4" />
      </video>
      <Creator>{finalDesign.creator}</Creator>
      <Title>{finalDesign.title}</Title>
      <Category>{finalDesign.category}</Category>
      <Description>{finalDesign.description}</Description>
    </StyledDesign>
  );
}

export default Design;
