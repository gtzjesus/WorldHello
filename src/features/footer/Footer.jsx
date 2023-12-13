import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

const StyledFooter = styled.footer`
  height: 50vh;
  background-color: var(--color-black);
  padding: var(--padding-medium);
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-white);
`;

const Intro = styled.span`
  text-transform: uppercase;
  opacity: 0.75;
  color: var(--color-blue);
`;

const Ending = styled.span`
  font-size: var(--font-xxsmall);
`;

const Logo = styled.span`
  font-size: var(--font-large);
  margin: 0 auto;
`;
function Footer() {
  return (
    <StyledFooter>
      <FooterInfo>
        <Intro>[ thank you ]</Intro>
        <Ending>
          WorldHello is a US based Web Development Agency, creating highly
          converting customer journeys through strategic web development that
          solve business challenges for brands.
        </Ending>
        <Logo>WorldHello</Logo>

        <Button variation="third" size="small">
          start for free
        </Button>
      </FooterInfo>
    </StyledFooter>
  );
}

export default Footer;
