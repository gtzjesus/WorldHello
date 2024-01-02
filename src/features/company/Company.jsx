import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

const StyledCompany = styled.div`
  padding: var(--padding-large) var(--padding-medium);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-large);
`;

const Intro = styled.div`
  text-transform: uppercase;
  color: var(--color-green);
`;

const Title = styled.span`
  font-size: var(--font-medium);
`;

const Description = styled.span`
  font-size: var(--font-small);
`;

const Special = styled.a`
  color: var(--color-green);
  font-size: var(--font-xsmall);
`;

const Img = styled.img`
  // BLACK AND WHITE
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
`;
const Contact = styled.div`
  display: flex;
  font-size: var(--font-xsmall);
`;

const MiniDescription = styled.span`
  font-size: var(--font-xsmall);
`;
function Company() {
  return (
    <StyledCompany>
      <Information>
        <Title>Why us?</Title>
        <Description>
          At WorldHello, we guarantee that teaming up with us is a strategic
          investment in expanding your business,
          <br />
          <Special>not just an extra cost.</Special>
        </Description>
        <Img src="/extras/me.png"></Img>
        <Contact>
          Contact our founder Jesus directly via:
          <Special href="https://www.linkedin.com/in/gtzjesus/">
            LinkedIn
          </Special>
        </Contact>
        <Intro>[ why we do what we do ]</Intro>

        <MiniDescription>
          At WorldHello, our core is rooted in solving challenges and we take
          immense pride in our relentless pursuit of excellence.
        </MiniDescription>
        <MiniDescription>
          We aim to surpass expectations with each website we undertake, driven
          by our passion for delivering top-notch, high-performance websites.
        </MiniDescription>
        <Button variation="secondary" size="small">
          get in touch for free
        </Button>
      </Information>
    </StyledCompany>
  );
}

export default Company;
