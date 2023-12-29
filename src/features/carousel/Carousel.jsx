import { useContext } from 'react';
import { DesignsContext } from '../../context/DesignsContext';
import Spinner from '../../ui/spinners/Spinner';
import Design from '../../ui/designs/Design';
import styled from 'styled-components';

const StyledCarousel = styled.div`
  background-color: var(--background-primary);
  overflow: hidden;
  padding: var(--padding-medium);
  color: var(--color-white);
`;
const CarouselArea = styled.div`
  position: relative;
  display: flex;
  gap: var(--gap-medium);

  // COVER THE FULL SCREEN OF EVERY DEVICE
  overflow-y: hidden;
  overflow-x: scroll;
  object-fit: cover;
`;

const Intro = styled.div`
  text-transform: uppercase;
  color: var(--color-green);
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
  justify-content: space-between;
  font-size: var(--font-xsmall);
  align-items: center;
  text-transform: uppercase;
  color: var(--color-green);
`;

const MiniDescription = styled.span`
  font-size: var(--font-xsmall);
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
          Target your ideal audience with a specialized website from WorldHello,
        </SubTitle>

        <Caption>
          what we&rsquo;ve built, <Img src="/extras/arrow.png"></Img>
        </Caption>
        <CarouselArea>
          {designs.map((design) => (
            <Design design={design} key={design.id} />
          ))}
        </CarouselArea>
        <Caption>
          swipe left to see more <Img src="/extras/arrow.png"></Img>
        </Caption>
        <SubTitle>
          transforming your clientele into loyal and paying customers.
        </SubTitle>
        <Intro>[ how we do it ]</Intro>
        <MiniDescription>
          It is essential to work with a team that understands the strategies to
          ensure the best possible outcome for your business.
        </MiniDescription>
        <MiniDescription>
          At WorldHello, we prioritize optimization for conversions and
          performance that allows businesses to increase their chances of
          success, by boosting revenue and being profitable.
        </MiniDescription>
      </Information>
    </StyledCarousel>
  );
}

export default Carousel;
