import { useContext } from 'react';
import { DesignsContext } from '../../context/DesignsContext';
import Spinner from '../../ui/spinners/Spinner';
import Design from '../../ui/designs/Design';
import styled from 'styled-components';

const CarouselArea = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: var(--background-primary);
`;

function Carousel() {
  // GRAB designs WITH CONTEXT API
  const { designs, isLoading, error } = useContext(DesignsContext);
  // CHECK if state IS LOADING
  if (isLoading) return <Spinner />;
  // HANDLE error
  if (error) throw new Error('Failed to grab designs');

  return (
    <CarouselArea>
      {designs.map((design) => (
        <Design design={design} key={design.id} />
      ))}
    </CarouselArea>
  );
}

export default Carousel;
