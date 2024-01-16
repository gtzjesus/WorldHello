import styled from 'styled-components';
import { useNavigate } from 'react-router';

const StyledNav = styled.nav`
  position: fixed;
  background: transparent;
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

  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5); /* Add shadow with a slight contrast */

  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }
`;

const Brand = styled.div`
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

const Logo = styled.img`
  height: 2.5rem;
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
        <Logo src="/logos/worldhello.png" alt="globe"></Logo>
        <Title>WorldHello</Title>
      </Brand>
      <Menu onClick={handleContact}>Contact</Menu>
    </StyledNav>
  );
}

export default Navigation;
