import { useContext } from 'react';
import { DesignsContext } from '../../context/DesignsContext';
import Spinner from '../../ui/spinners/Spinner';
import Design from '../../ui/designs/Design';
import styled from 'styled-components';

const StyledCarousel = styled.div`
  background-color: var(--background-secondary);
  overflow: hidden;
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

const SubTitle = styled.span`
  font-size: var(--font-small);
`;

const Caption = styled.span`
  font-size: var(--font-small);
  text-transform: uppercase;
  gap: var(--gap-medium);
  text-align: center;
`;

const Img = styled.img`
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
        <SubTitle>
          We specialize in crafting websites that precisely target your ideal
          audience,
        </SubTitle>
      </Hook>

      <Hook>
        <Caption>Take a peek at what we have built </Caption>
      </Hook>

      <CarouselArea>
        {designs.map((design) => (
          <Design design={design} key={design.id} />
        ))}
      </CarouselArea>

      <End>
        <Img src="/extras/arrow.png" alt="globe" />
        <SubTitle>transforming them into loyal and paying clients.</SubTitle>
      </End>
    </StyledCarousel>
  );
}

export default Carousel;
