import { useContext, useEffect, useRef, useState } from 'react';
import { DesignsContext } from '../../context/DesignsContext';
import Spinner from '../../ui/spinners/Spinner';
import Design from '../../ui/designs/Design';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const ParentCarousel = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 150.15em) {
    flex-direction: row;
  }
`;

const StyledCarousel = styled.div`
  background-color: var(--color-black);
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
  transition: ease 1100ms;
`;

const CarouselDots = styled.div`
  z-index: var(--z-top);
  text-align: center;

  @media (min-width: 150.15em) {
    text-align: right;
    padding-right: var(--padding-small);
  }
`;

const CarouselDot = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: var(--color-white);

  @media (min-width: 78.15em) {
    height: 30px;
    width: 30px;
    margin: 20px 10px 0px;
  }
`;

const Intro = styled.div`
  text-transform: uppercase;
  color: var(--color-tan);
  font-size: var(--font-xsmall);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
  padding: var(--padding-medium);

  @media (min-width: 40.25em) {
    padding: var(--padding-medium) var(--padding-xlarge);
    gap: var(--gap-large);
  }

  @media (min-width: 78.15em) {
    padding: var(--padding-large) var(--padding-xxlarge);
    gap: var(--gap-xxlarge);
  }
`;

const Additional = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
  padding: var(--padding-medium);

  @media (min-width: 40.25em) {
    padding: var(--padding-medium) var(--padding-xlarge);
    gap: var(--gap-large);
  }

  @media (min-width: 78.15em) {
    padding: var(--padding-large) var(--padding-xxlarge);
    gap: var(--gap-xxlarge);
    flex-direction: row;
  }
`;

const SubTitle = styled.span`
  font-size: var(--font-small);

  @media (min-width: 40.25em) {
    font-size: var(--font-medium);
  }

  @media (min-width: 78.15em) {
    font-size: var(--font-large);
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
  color: var(--color-black);
  background-color: var(--color-tan);
  padding: 0 var(--padding-xxsmall);
  width: fit-content;

  @media (min-width: 40.25em) {
    font-size: var(--font-large);
    padding: 0 var(--padding-xsmall);
  }

  @media (min-width: 78.15em) {
    font-size: var(--font-xlarge);
  }
`;

const MiniDescription = styled.span`
  font-size: var(--font-xsmall);

  @media (min-width: 40.25em) {
    font-size: var(--font-small);
  }

  @media (min-width: 78.15em) {
    font-size: var(--font-small);
  }
`;

const Underline = styled.div`
  background: var(--color-tan);
  color: var(--color-black);
  padding: 0 var(--padding-xxsmall);
  width: fit-content;
`;

const ImageCaption = styled.div`
  @media (min-width: 78.15em) {
    font-size: var(--font-small);
  }
`;

function Carousel() {
  // DELAY NEEDED FOR CAROUSEL setTIMEOUT
  const delay = 17500;
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
    <LazyLoad>
      <StyledCarousel>
        <ParentCarousel>
          <Information>
            <Intro>[ what we offer]</Intro>
            <SubTitle>
              Connect with your desired audience with a
              <Underline>customized website</Underline> from WorldHello,
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
        </ParentCarousel>
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
        <Additional>
          <SubTitle>
            <Intro>[ our approach]</Intro>
            <br />
            Our focus is on optimizing conversions to elevate your
            business&rsquo;s potential for success. <br /> <br /> Transforming
            your clientele into loyal, paying customers through a
            <Underline>top-performing website.</Underline> <br />
            <MiniDescription>
              Ultimately driving profitability and revenue growth.
            </MiniDescription>
          </SubTitle>
        </Additional>
      </StyledCarousel>
    </LazyLoad>
  );
}

export default Carousel;
