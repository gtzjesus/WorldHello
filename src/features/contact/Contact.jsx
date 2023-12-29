import styled from 'styled-components';

const StyledContact = styled.div`
  display: flex;
  height: 100vh;
  background-image: url('/backgrounds/contact.png');
  background-size: cover;
  color: var(--color-white);
`;

const Information = styled.div`
  display: flex;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: var(--font-large);
`;
function Contact() {
  return (
    <StyledContact>
      <Information>
        <Title>Get in touch</Title>
      </Information>
    </StyledContact>
  );
}

export default Contact;
