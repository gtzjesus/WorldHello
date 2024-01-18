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
import LazyLoad from 'react-lazyload';

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
  width: var(--width-full-window);
  z-index: var(--z-top);
  height: var(--height-navigation);
  font-size: var(--font-xxxsmall);


`;

const Brand = styled.div`
  // Code logic to arrange children
  display: flex;
  align-items: center;
  padding: 0 0 0 var(--padding-small);
  gap: var(--gap-small);


`;

const Logo = styled.img`
  // Code logic to modify logo
  height: var(--logo-height);

  // @MEDIAQUERY logic for big devices 1500px+
  @media (min-width: 108.25em) {
    height: var(--logo-height-big);
  }
`;

const Title = styled.span`
  // TODO: Code logic to modify brand title
`;

const Menu = styled.a`
  // Code logic for contact link a element
  padding: 0 var(--padding-large) 0 0;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Navigation() {
  // Grab react hook to navigate the router
  const navigate = useNavigate();
  // Handles the navigation to contact page
  function handleContact() {
    navigate('/contact');
  }
  // Handles the navigation to home page
  function handleHome() {
    navigate('/');
  }
  return (
    <LazyLoad>
      {/* <!-- Nav Container , the header --> */}
      <StyledNav>
        {/* <!-- Brand Container for logo and title --> */}
        <Brand onClick={handleHome}>
          <Logo src="/logos/worldhello.png" alt="globe"></Logo>
          <Title>WorldHello</Title>
        </Brand>
        {/* <!-- Menu Container for links --> */}
        <Menu onClick={handleContact}>Contact</Menu>
      </StyledNav>
    </LazyLoad>
  );
}

// Export the Component (reusable)
export default Navigation;
