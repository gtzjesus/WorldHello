import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('/backgrounds/contact.png');
  background-size: cover;
  color: var(--color-white);
  padding: var(--padding-xlarge) var(--padding-medium);
  gap: var(--gap-xlarge);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Title = styled.span`
  font-size: var(--font-large);
`;

const Special = styled.span`
  background-color: var(--color-white);
  color: var(--color-green);
`;

const Description = styled.span`
  font-size: var(--font-xsmall);
`;
function Contact() {
  return (
    <StyledContact>
      <Information>
        <Title>
          Refer and <Special>Earn</Special>
        </Title>
        <Description>
          WorldHello rewards you every time you successfully refer someone to
          us. We till pay you 10% of the value once completed, you just simply
          have to share our services with your friends.
        </Description>
      </Information>
      <Information>
        <Title>Contact us</Title>
        <Description>
          We have a team available at WorldHello if you have a general inquiry,
          <br />
          You can contact us via email at: contact@worldhello.us
          <br />
          <br />
          Or just,
        </Description>
        <Button variation="secondary" size="small">
          Contact us here
        </Button>
      </Information>
    </StyledContact>
  );
}

export default Contact;
