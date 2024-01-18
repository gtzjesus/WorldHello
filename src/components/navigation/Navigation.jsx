// File: Navigation.js
// Description: React navigation Component (header).
// LazyLoading from React for optimization (images & web app loading time).
// Global Styles from /src/styles/ used for global variables.
// useNavigate react hook to navigate react router (links)

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';
import { useNavigate } from 'react-router';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledNav = styled.nav`
  // Code logic to arrange children
  display: flex;
  align-items: center;
  justify-content: space-between;
  // Code logic for positioning fixed in all web app + header config
  position: fixed;
  background: transparent;
  color: var(--color-black);
  top: 0;
  width: 100vw;
  z-index: var(--z-top);
  height: var(--height-navigation);
  font-size: var(--font-xsmall);

  // @MEDIAQUERY logic for bigger devices (responsive design)
  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }
`;

const Brand = styled.div`
  // Code logic to arrange children
  display: flex;
  align-items: center;
  padding: 0 0 0 var(--padding-small);
  gap: var(--gap-small);

  // @MEDIAQUERY logic for bigger devices (responsive design)
  @media (min-width: 61.25em) {
    padding: 0 0 0 var(--padding-medium);
    gap: var(--gap-medium);
  }
`;

const Logo = styled.img`
  height: 2rem;
`;

const Title = styled.span``;

const Menu = styled.a`
  padding: 0 var(--padding-small) 0 0;
  @media (min-width: 61.25em) {
    padding: 0 var(--padding-medium) 0 0;
  }
`;
function Navigation() {
  const navigate = useNavigate();

  function handleContact() {
    navigate('/contact');
  }

  function handleHome() {
    navigate('/');
  }
  return (
    <StyledNav>
      <Brand onClick={handleHome}>
        <Logo src="/logos/helloworld.png" alt="globe"></Logo>
        <Title>WorldHello</Title>
      </Brand>
      <Menu onClick={handleContact}>Contact</Menu>
    </StyledNav>
  );
}

export default Navigation;
