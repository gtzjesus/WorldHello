import styled from 'styled-components';
const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: var(--z-top);
  margin: var(--margin-small) 0 0 0;
  // FONTS
  font-family: 'League Gothic', sans-serif;
  font-size: var(--font-xsmall);
  color: var(--color-white);
  // ARRANGE CHILDREN
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.span`
  display: flex;
  align-items: center;
  padding: 0 0 0 var(--padding-small);
  gap: var(--gap-xsmall);
`;

const Menu = styled.div`
  padding: 0 var(--padding-small) 0 0;
`;
function Navigation() {
  return (
    <StyledNav>
      <Brand>
        <img src="/logos/worldhello.png" />
        WorldHello
      </Brand>
      <Menu>Menu</Menu>
    </StyledNav>
  );
}

export default Navigation;
