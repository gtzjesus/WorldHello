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

  @media (min-width: 40.25em) {
    padding: var(--padding-medium) var(--padding-xlarge);
  }

  @media (min-width: 78.15em) {
  }
`;

const SubTitle = styled.span`
  font-size: var(--font-small);

  @media (min-width: 40.25em) {
    font-size: var(--font-medium);
  }

  @media (min-width: 78.15em) {
  }
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
  color: var(--color-white);
  background-color: var(--color-green);
  padding: 0 var(--padding-xxsmall);

  @media (min-width: 40.25em) {
    font-size: var(--font-large);
    padding: 0 var(--padding-xsmall);
  }

  @media (min-width: 78.15em) {
  }
`;

const MiniDescription = styled.span`
  font-size: var(--font-xsmall);

  @media (min-width: 40.25em) {
    font-size: var(--font-small);
  }

  @media (min-width: 78.15em) {
  }
`;

function Carousel() {
  // DELAY NEEDED FOR CAROUSEL setTIMEOUT
  const delay = 5000;
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
          prevIndex === designs.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, designs]);

  // CHECK if state IS LOADING
  if (isLoading) return <Spinner />;

  // HANDLE error
  if (error) throw new Error('Failed to grab designs');

  return (
    <StyledCarousel>
      <Information>
        <Intro>[ what we offer]</Intro>
        <SubTitle>
          Connect with your desired audience with a customized website from
          WorldHello,
        </SubTitle>

        <Caption>our achievements,</Caption>
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
        {designs.map((_, idx) => (
          <CarouselDot
            key={idx}
            className={`CarouselDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></CarouselDot>
        ))}
      </CarouselDots>
      <Information>
        <SubTitle>
          Tranform your clientele into devoted, paying customers through a
          top-performing website.
        </SubTitle>
        <Intro>[ WorldHello&rsquo;s approach]</Intro>
        <MiniDescription>
          Collaborating with a team knowledgeable in effective strategies is
          crucial for maximizing your business outcomes.
        </MiniDescription>
        <MiniDescription>
          At WorldHello, our focus is on optimizing conversions to elevate your
          business&rsquo;s potential for success.
        </MiniDescription>
        <SubTitle>
          Ultimately driving revenue growth and profitability.
        </SubTitle>
      </Information>
    </StyledCarousel>
  );
}

export default Carousel;
