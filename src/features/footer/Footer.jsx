import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

const StyledFooter = styled.footer`
  background-color: var(--color-black);
  padding: var(--padding-medium);
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-white);
  gap: var(--gap-medium);
`;

const Intro = styled.span`
  text-transform: uppercase;
  opacity: 0.75;

  color: var(--color-blue);
`;

const Ending = styled.span`
  font-size: var(--font-xsmall);
`;

const Logo = styled.span`
  font-size: var(--font-large);
  margin: 0 auto;
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--padding-xsmall) 0;
`;

const Label = styled.div``;

const Result = styled.div``;
function Footer() {
  return (
    <StyledFooter>
      <FooterInfo>
        <Intro>[ thank you ]</Intro>
        <Ending>
          WorldHello is a US based Web Development Agency, creating highly
          converting customer requests through strategic web development
          principles that solve business challenges for brands.
        </Ending>
        <hr />
        <Logo>WorldHello</Logo>
        <Intro>
          <Label>Contact us</Label>
        </Intro>
        <Contact>
          <Label>Telephone</Label>
          <Result>
            <a href="tel:+1 915-471-9129">+1 915-471-9129</a>
          </Result>
        </Contact>

        <Contact>
          <Label>Email</Label>
          <Result>contact@worldhello.us</Result>
        </Contact>

        <Contact>
          <Label>Based in</Label>
          <Result>Texas, US</Result>
        </Contact>

        <Button variation="third" size="small">
          start for free
        </Button>
      </FooterInfo>
    </StyledFooter>
  );
}

export default Footer;
