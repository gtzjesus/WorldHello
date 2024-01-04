import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

const StyledPresence = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-medium);

  @media (min-width: 40.25em) {
    padding: var(--padding-small) var(--padding-xlarge);
  }

  @media (min-width: 61.25em) {
    padding: var(--padding-medium) var(--padding-xxlarge);
  }

  @media (min-width: 78.15em) {
    padding: var(--padding-large) var(--padding-xlarge);
  }

  @media (min-width: 150.15em) {
    padding: var(--padding-xlarge) var(--padding-giant);
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);

  @media (min-width: 78.15em) {
    flex-direction: row;
  }
`;
const Intro = styled.div`
  text-transform: uppercase;
  color: var(--color-green);
  font-size: var(--font-xsmall);
`;

const Special = styled.span`
  color: var(--color-green);
`;

const Title = styled.span`
  font-size: var(--font-medium);

  @media (min-width: 61.25em) {
    font-size: var(--font-large);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-xlarge);
  }
`;

const Closing = styled.span`
  font-size: var(--font-xsmall);
  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-medium);
  }
`;

const Img = styled.img`
  padding: var(--padding-medium) 0;

  @media (min-width: 78.15em) {
    padding: var(--padding-xlarge);
    width: 40vw;
  }

  @media (min-width: 100.15em) {
    padding: var(--padding-xxlarge);
    width: 30vw;
  }

  @media (min-width: 150.15em) {
    padding: var(--padding-xxlarge);
    width: 25vw;
  }
`;

const Description = styled.span`
  font-size: var(--font-small);

  @media (min-width: 61.25em) {
    font-size: var(--font-medium);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-large);
  }
`;

const BackgroundColored = styled.div`
  background-color: var(--color-white);
  color: var(--color-green);
  padding: 0 var(--padding-xxsmall);
  width: fit-content;
`;

function Presence() {
  return (
    <StyledPresence>
      <Information>
        <Title>
          <Intro>[ who we look for ]</Intro>
          <br />
          Seeking to enhance your company?
        </Title>
        <Img src="/extras/brand.png"></Img>
      </Information>
      <Information>
        <Description>
          <BackgroundColored>Fully maximize</BackgroundColored> the capabilities
          of your business with a strong digital presence!
          <br />
          <br />
          <Closing>
            Manage your website effectively with <Special>WorldHello</Special>.{' '}
            <br />
            <br />
          </Closing>
          <Button variation="secondary" size="small">
            Start now for free
          </Button>
        </Description>
      </Information>
    </StyledPresence>
  );
}

export default Presence;
