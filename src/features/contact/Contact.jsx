import styled from 'styled-components';

const StyledContact = styled.div`
  display: flex;
  height: 100vh;
  background-image: url('/backgrounds/contact.png');
  background-size: cover;
  color: var(--color-white);
`;
function Contact() {
  return <StyledContact>contactß</StyledContact>;
}

export default Contact;
