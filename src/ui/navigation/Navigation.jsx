import styled from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: var(--width-full-window);
  background-color: var(--background-tile);
  padding: var(--padding-header);
  z-index: var(--z-top);
  background-color: red;
`;
function Navigation() {
  return <StyledNav>World Hello</StyledNav>;
}

export default Navigation;
