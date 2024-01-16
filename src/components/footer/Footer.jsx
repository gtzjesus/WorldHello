import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-medium);

  @media (min-width: 61.25em) {
    padding: var(--padding-xlarge);
  }

  @media (min-width: 78.15em) {
    flex-direction: row;
    gap: var(--gap-giant);
  }

  @media (min-width: 150.15em) {
    gap: var(--gap-xgiant);
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Intro = styled.span`
  text-transform: uppercase;
  background-color: var(--color-tan);
  color: var(--color-black);
  padding: 0 var(--padding-xxsmall);
  width: fit-content;
`;

const Ending = styled.span`
  font-size: var(--font-xsmall);

  @media (min-width: 78.15em) {
    font-size: var(--font-small);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-medium);
  }
`;

const Logo = styled.span`
  font-size: var(--font-large);
  margin: 0 auto;
  background-color: var(--color-tan);
  color: var(--color-black);
  padding: 0 var(--padding-xxsmall);
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--padding-xsmall) 0;

  @media (min-width: 78.15em) {
    padding: var(--padding-small) 0;
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-small);
    padding: var(--padding-medium) 0;
  }
`;

const Label = styled.div``;

const Result = styled.div`
  color: var(--color-tan);
`;
function Footer() {
  return (
    <StyledFooter>
      <FooterInfo>
        <Intro>[ thank you ]</Intro>
        <Ending>WorldHello is a US based Website Development Agency.</Ending>

        <Ending>
          We excel in transforming client requirements using strategic web
          development strategies designed to address business needs effectively.
        </Ending>
      </FooterInfo>
      <hr />
      <FooterInfo>
        <Logo>WorldHello</Logo>
        <Intro>
          <Label>[ Contact us ]</Label>
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

        <Button variation="fourth" size="small">
          start today
        </Button>
      </FooterInfo>
    </StyledFooter>
  );
}

export default Footer;
