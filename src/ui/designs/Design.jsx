import styled from 'styled-components';

const StyledDesign = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.15rem solid var(--color-black);
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
  };

  console.log(finalDesign);
  return (
    <StyledDesign>
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
