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
          At WorldHello we ensure that partnering with us is a valuable
          investment to growing your business,
          <br />
          <Special>rather than an additonal expense.</Special>
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
          We are problem solvers at heart and pride ourselves on a commitment to
          excellence.
        </MiniDescription>
        <MiniDescription>
          At WorldHello, we strive to exceed expectations with every website
          that crosses our path. Our passion relies in delivering high-quality
          and high-performing websites.
        </MiniDescription>
        <Button variation="secondary" size="small">
          Book A Free Call
        </Button>
      </Information>
    </StyledCompany>
  );
}

export default Company;
