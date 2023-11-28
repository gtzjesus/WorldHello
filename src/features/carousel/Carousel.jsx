import { useContext } from 'react';
import { DesignsContext } from '../../context/DesignsContext';
import Spinner from '../../ui/spinners/Spinner';
import Design from '../../ui/designs/Design';
import styled from 'styled-components';

const StyledCarousel = styled.div`
  background-color: var(--background-tile);
`;
const CarouselArea = styled.div`
  display: flex;
  gap: var(--gap-medium);
  padding: var(--margin-xlarge);
  // COVER THE FULL SCREEN OF EVERY DEVICE
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: scroll;
  object-fit: cover;
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
      <CarouselArea>
        {designs.map((design) => (
          <Design design={design} key={design.id} />
        ))}
      </CarouselArea>
    </StyledCarousel>
  );
}

export default Carousel;
