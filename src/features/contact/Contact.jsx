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

  @media (min-width: 40.25em) {
  }

  @media (min-width: 61.25em) {
    padding: var(--padding-xxlarge) var(--padding-large);
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
  gap: var(--gap-medium);
`;

const Title = styled.span`
  font-size: var(--font-large);

  @media (min-width: 61.25em) {
    font-size: var(--font-xlarge);
  }

  @media (min-width: 78.15em) {
    font-size: var(--font-xlarge);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-xxlarge);
  }
`;

const Special = styled.span`
  background-color: var(--color-tan);
  color: var(--color-black);
  padding: 0 var(--padding-xxsmall);
`;

const Description = styled.span`
  font-size: var(--font-xsmall);

  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }

  @media (min-width: 78.15em) {
    font-size: var(--font-medium);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-medium);
  }
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
        <Button variation="fourth" size="small">
          Contact us here
        </Button>
      </Information>
    </StyledContact>
  );
}

export default Contact;
