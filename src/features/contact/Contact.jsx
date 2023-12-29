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
          Our referral program rewards you every time you refer a friend to us.
          Simply share our services with your friends, and once we complete the
          project, we will pay you 10% of its value.
        </Description>
      </Information>
      <Information>
        <Title>Get in touch</Title>
        <Description>
          If you have a general inquiry and would like to speak with our team,
          you can contact us via email at: contact@worldhello.us
        </Description>
        <Button variation="secondary" size="small">
          Call us for free
        </Button>
      </Information>
    </StyledContact>
  );
}

export default Contact;
