import styled from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  background: var(--color-green);
  color: var(--color-white);
  top: 0;
  width: 100vw;
  z-index: var(--z-top);
  padding: var(--margin-small) 0;

  // FONTS
  font-size: var(--font-xsmall);
  // ARRANGE CHILDREN
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }
`;

const Brand = styled.span`
  // ARRANGE CHILDREN
  display: flex;
  align-items: center;
  padding: 0 0 0 var(--padding-small);
  gap: var(--gap-small);

  @media (min-width: 61.25em) {
    padding: 0 0 0 var(--padding-medium);
    gap: var(--gap-medium);
  }
`;

const Menu = styled.div`
  padding: 0 var(--padding-small) 0 0;

  @media (min-width: 61.25em) {
    padding: 0 var(--padding-medium) 0 0;
  }
`;
function NavigationWBackground() {
  return (
    <StyledNav>
      <Brand>
        <img src="/logos/worldhello.png" alt="globe" />
        WorldHello
      </Brand>
      <Menu>Contact</Menu>
    </StyledNav>
  );
}

export default NavigationWBackground;
