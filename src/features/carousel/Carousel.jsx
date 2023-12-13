import { useContext } from 'react';
import { DesignsContext } from '../../context/DesignsContext';
import Spinner from '../../ui/spinners/Spinner';
import Design from '../../ui/designs/Design';
import styled from 'styled-components';

const StyledCarousel = styled.div`
  background-color: var(--background-secondary);
  overflow: hidden;
  padding: var(--padding-medium);
`;
const CarouselArea = styled.div`
  position: relative;
  display: flex;
  gap: var(--gap-small);

  // COVER THE FULL SCREEN OF EVERY DEVICE
  overflow-y: hidden;
  overflow-x: scroll;
  object-fit: cover;
`;

const Intro = styled.div`
  text-transform: uppercase;
  color: var(--color-blue);
  opacity: 0.75;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const SubTitle = styled.span`
  font-size: var(--font-small);
`;

const Img = styled.img`
  height: 5vw;
`;

const Caption = styled.div`
  display: flex;
  font-size: var(--font-small);
  align-items: center;
  text-transform: uppercase;
  color: var(--color-blue);
`;

const MiniDescription = styled.span`
  font-size: var(--font-xxsmall);
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
      <Information>
        <Intro>[ what we do ]</Intro>
        <SubTitle>
          We specialize in crafting websites that precisely target your ideal
          audience,
        </SubTitle>
        <Caption>
          what we&rsquo;ve built <Img src="/extras/arrow.png"></Img>
        </Caption>
        <CarouselArea>
          {designs.map((design) => (
            <Design design={design} key={design.id} />
          ))}
        </CarouselArea>

        <SubTitle>transforming them into loyal and paying clients.</SubTitle>
        <Intro>[ how we do it ]</Intro>
        <MiniDescription>
          By prioritizing optimization for conversions and performance,
          businesses can increase their chances of success, by boosting revenue
          and being profitable.
        </MiniDescription>
        <MiniDescription>
          It is essential to work with a team that understands the strategies to
          ensure the best possible outcomes for your business.
        </MiniDescription>
      </Information>
    </StyledCarousel>
  );
}

export default Carousel;
