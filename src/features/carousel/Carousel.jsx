import { useContext } from 'react';
import { DesignsContext } from '../../context/DesignsContext';
import Spinner from '../../ui/spinners/Spinner';
import Design from '../../ui/designs/Design';
import styled from 'styled-components';

const StyledCarousel = styled.div`
  background-color: var(--background-primary);
`;
const CarouselArea = styled.div`
  display: flex;
  gap: var(--gap-medium);
  padding: var(--margin-xlarge);

  // COVER THE FULL SCREEN OF EVERY DEVICE
  overflow-y: hidden;
  overflow-x: scroll;
  object-fit: cover;
`;

const Hook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--padding-medium);
  gap: var(--gap-medium);
`;

const Title = styled.span`
  align-items: center;
  font-size: var(--font-medium);
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
        <Title>Say hello to the world!</Title>
        <SubTitle>
          We specialise in implementing strategic user experiences that
          precisely target your ideal customers,
        </SubTitle>
        <Caption>What weve done,</Caption>
      </Hook>
      <CarouselArea>
        {designs.map((design) => (
          <Design design={design} key={design.id} />
        ))}
      </CarouselArea>
      <Hook>
        <SubTitle>transforming them into loyal and paying clients.</SubTitle>
      </Hook>
    </StyledCarousel>
  );
}

export default Carousel;
