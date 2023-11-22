import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: var(--font-xsmall);
  background: none;
  padding: var(--padding-xxsmall);
  border: 0.15rem solid var(--color-white);
  width: fit-content;
`;
function Button() {
  return <StyledButton>learn about WorldHello</StyledButton>;
}

export default Button;
