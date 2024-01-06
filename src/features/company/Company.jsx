import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

const StyledCompany = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-tan);
  padding: var(--padding-large) var(--padding-medium);

  @media (min-width: 40.25em) {
  }

  @media (min-width: 61.25em) {
    padding: var(--padding-large) var(--padding-medium);
  }

  @media (min-width: 78.15em) {
    padding: var(--padding-xxxlarge) var(--padding-xxlarge);
  }

  @media (min-width: 150.15em) {
    padding: var(--padding-giant) var(--padding-xxxlarge);
    gap: var(--gap-giant);
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-large);
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
`;

const Description = styled.span`
  font-size: var(--font-small);
`;

const Special = styled.a`
  color: var(--color-tan);
  font-size: var(--font-xsmall);
  background-color: var(--color-black);
  padding: 0 var(--padding-xxsmall);
`;

const Img = styled.img`
  // BLACK AND WHITE
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  padding: var(--padding-medium) 0;
`;

const MiniDescription = styled.span`
  font-size: var(--font-xsmall);
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
        <Img src="/backgrounds/company.png"></Img>
      </Information>
      <Information>
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
      </Information>
    </StyledCompany>
  );
}

export default Company;
