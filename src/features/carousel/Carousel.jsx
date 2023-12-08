import { useContext } from 'react';
import { DesignsContext } from '../../context/DesignsContext';
import Spinner from '../../ui/spinners/Spinner';
import Design from '../../ui/designs/Design';
import styled from 'styled-components';

const StyledCarousel = styled.div`
  background-color: var(--background-primary);
  overflow: hidden;
  color: var(--color-white);
`;
const CarouselArea = styled.div`
  position: relative;
  display: flex;
  gap: var(--gap-medium);
  padding: var(--margin-small) var(--margin-xlarge);

  // COVER THE FULL SCREEN OF EVERY DEVICE
  overflow-y: hidden;
  overflow-x: scroll;
  object-fit: cover;
`;

const Hook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--gap-medium);
  padding: var(--padding-medium);
`;

const End = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--gap-medium);
  padding: var(--padding-medium);
`;

const Title = styled.span`
  align-items: center;
  font-size: var(--font-medium);
  border-bottom: 0.25rem solid var(--color-yellow);
  width: fit-content;
`;

const SubTitle = styled.span`
  font-size: var(--font-small);
`;

const Caption = styled.span`
  opacity: 0.4;
  font-size: var(--font-xsmall);
  text-transform: uppercase;
  float: left;
  gap: var(--gap-medium);
`;

const Special = styled.span`
  color: var(--color-yellow);
`;

const Img = styled.img`
  color: var(--color-yellow);
  height: var(--height-arrow);
`;

function Carousel() {
  // GRAB designs WITH CONTEXT API
  const { designs, isLoading, error } = useContext(DesignsContext);
  // CHECK if state IS LOADING
  if (isLoading) return <Spinner />;
  // HANDLE error
  if (error) throw new Error('Failed to grab designs');

  return (
    <StyledCarousel>
      <Hook>
        <Title>Say HELLO to the world!</Title>
        <SubTitle>
          We specialize in crafting strategic user experiences that precisely
          target your ideal audience,
        </SubTitle>
        <Caption>
          <Special>[ </Special>What we have done <Special>]</Special>
        </Caption>
      </Hook>

      <CarouselArea>
        {designs.map((design) => (
          <Design design={design} key={design.id} />
        ))}
      </CarouselArea>

      <End>
        <Img src="/extras/arrow.png" alt="globe" />
        <SubTitle>
          transforming your visitors into loyal and paying customers.
        </SubTitle>
      </End>
    </StyledCarousel>
  );
}

export default Carousel;
