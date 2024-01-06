import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

const StyledCompany = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-tan);
  padding: var(--padding-large) var(--padding-medium);

  @media (min-width: 61.25em) {
    padding: var(--padding-large) var(--padding-xxlarge);
  }

  @media (min-width: 78.15em) {
    padding: var(--padding-xlarge) var(--padding-large);
    flex-direction: row;
  }

  @media (min-width: 150.15em) {
    padding: var(--padding-xlarge) var(--padding-xxxlarge);
    gap: var(--gap-giant);
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-large);
`;

const Extra = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-large);

  @media (min-width: 78.15em) {
    padding-top: 35rem;
  }

  @media (min-width: 150.15em) {
    padding-top: 45rem;
  }
`;

const Intro = styled.div`
  text-transform: uppercase;
  color: var(--color-tan);
  font-size: var(--font-xsmall);
  background-color: var(--color-black);
  padding: 0 var(--padding-xxsmall);
  width: fit-content;
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

const Description = styled.span`
  font-size: var(--font-small);

  @media (min-width: 61.25em) {
    font-size: var(--font-medium);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-large);
  }
`;

const Special = styled.a`
  color: var(--color-tan);
  font-size: var(--font-xsmall);
  background-color: var(--color-black);
  padding: 0 var(--padding-xxsmall);

  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-medium);
  }
`;

const Img = styled.img`
  // BLACK AND WHITE
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
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

const MiniDescription = styled.span`
  font-size: var(--font-xsmall);

  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-medium);
  }
`;
function Company() {
  return (
    <StyledCompany>
      <Information>
        <Title>About us</Title>
        <Description>
          At <Special>WorldHello</Special>, we guarantee that teaming up with us
          is a strategic investment in expanding your business,
          <br />
          <Special>not just an extra cost.</Special>
        </Description>
        <Img src="src/assets/backgrounds/company.png"></Img>
      </Information>
      <Extra>
        <Intro>[ why we do what we do ]</Intro>

        <MiniDescription>
          At WorldHello, our core is rooted in solving challenges and we take
          immense pride in our relentless pursuit of excellence.
        </MiniDescription>
        <MiniDescription>
          We aim to surpass expectations with each website we undertake, driven
          by our passion for delivering top-notch, high-performance websites.
        </MiniDescription>
        <Button variation="fifth" size="small">
          get in touch for free
        </Button>
      </Extra>
    </StyledCompany>
  );
}

export default Company;
