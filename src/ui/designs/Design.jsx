import styled from 'styled-components';

const StyledDesign = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.15rem solid var(--color-black);
`;

const Img = styled.img``;

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
    image: design.image,
  };
  console.log(finalDesign);
  return (
    <StyledDesign>
      <Img src={finalDesign.image} />

      <Creator>{finalDesign.creator}</Creator>
      <Title>{finalDesign.title}</Title>
      <Category>{finalDesign.category}</Category>
      <Description>{finalDesign.description}</Description>
    </StyledDesign>
  );
}

export default Design;
