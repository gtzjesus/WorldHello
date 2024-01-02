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
  padding: 0 var(--padding-xxsmall);
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
          WorldHello <Special>offers rewards</Special> for every successful
          referral you make to us. Upon completion, we&rsquo;ll compensate you
          with 10% of the total value; all you need to do is share our services
          with your friends.
        </Description>
      </Information>
      <Information>
        <Title>Contact us</Title>
        <Description>
          We have a team available at WorldHello if you have a general inquiry,
          you can contact us via email at: contact@worldhello.us
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
