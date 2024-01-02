import { useContext, useEffect, useRef, useState } from 'react';
import { DesignsContext } from '../../context/DesignsContext';
import Spinner from '../../ui/spinners/Spinner';
import Design from '../../ui/designs/Design';
import styled from 'styled-components';

const StyledCarousel = styled.div`
  background-color: var(--background-primary);
  color: var(--color-white);
  overflow: hidden;
`;
const CarouselArea = styled.div`
  // COVER THE FULL SCREEN OF EVERY DEVICE
  margin: 0 auto;
  max-width: 100vw;
`;

const CarouselAreaSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`;

const CarouselDots = styled.div`
  text-align: center;
`;

const CarouselDot = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: var(--color-white);
`;

const Intro = styled.div`
  text-transform: uppercase;
  color: var(--color-green);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
  padding: var(--padding-medium);
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
  font-size: var(--font-medium);
  align-items: center;
  text-transform: uppercase;
  color: var(--color-green);
`;

const MiniDescription = styled.span`
  font-size: var(--font-xsmall);
`;

function Carousel() {
  // DELAY NEEDED FOR CAROUSEL setTIMEOUT
  const delay = 3500;
  // use useState TO KEEP TRACK OF DESIGN + SLIDESHOW
  const [index, setIndex] = useState(0);
  // NEED TO CLEAR OUR TIME IF click on buttons
  const timeoutRef = useRef(null);
  // FUNCTION TO CLEAR OUT THE TIMEOUT (RESET)
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  // GRAB designs WITH CONTEXT API
  const { designs, isLoading, error } = useContext(DesignsContext);

  // useEffect for settingTimeout FUNCTIONALITY
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === designs && designs.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

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

        <Caption>what we&rsquo;ve built,</Caption>
      </Information>
      <CarouselArea>
        <CarouselAreaSlider
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {designs.map((design) => (
            <Design design={design} key={design.id} />
          ))}
        </CarouselAreaSlider>
      </CarouselArea>
      <CarouselDots>
        {designs.map((_, index) => (
          <CarouselDot
            key={index}
            className={`CarouselDot${index === index ? ' active' : ''}`}
            onClick={() => {
              setIndex(index);
            }}
          ></CarouselDot>
        ))}
      </CarouselDots>
      <Information>
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
