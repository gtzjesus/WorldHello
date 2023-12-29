import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

const StyledContact = styled.div`
  display: flex;
  height: var(--height-full-window);
  background-image: url('/backgrounds/contact.png');
  background-size: cover;
  color: var(--color-white);
  padding: var(--padding-medium);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Title = styled.span`
  font-size: var(--font-large);
`;

const Description = styled.span`
  font-size: var(--font-xsmall);
`;
function Contact() {
  return (
    <StyledContact>
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
