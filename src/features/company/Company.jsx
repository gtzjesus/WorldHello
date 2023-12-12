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

const Title = styled.span`
  font-size: var(--font-medium);
`;

const Description = styled.span`
  font-size: var(--font-small);
`;

const Special = styled.div`
  color: var(--color-blue);
`;

const Img = styled.img``;
const Contact = styled.span`
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
          <Special>rather than an additonal expense.</Special>
        </Description>
        <Img src="/extras/me.png"></Img>
        <Contact>
          Contact our founder Jesus directly:
          <br />
          via LinkedIn or jesus@worldhello.com
        </Contact>
        <MiniDescription>
          We are problem solvers at heart and pride ourselves on a commitment to
          excellence. Delivering high-quality and high-performing websites is
          our passion, and we strive to exceed expectations with every project.
        </MiniDescription>
        <Button variation="secondary" size="small">
          Book A Free Call
        </Button>
      </Information>
    </StyledCompany>
  );
}

export default Company;
