import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    font-size: var(--font-xsmall);
    padding: 0.8rem 1.2rem;
  `,
};

const variations = {
  primary: css`
    color: var(--color-blue);
    background-color: var(--background-secondary);
  `,
  secondary: css`
    color: var(--color-black);
    background-color: var(--background-secondary);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);
  `,
};

const Button = styled.button`
  font-family: 'Bebas Neue', sans-serif;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]};
`;

Button.defaultProps = {
  variation: 'primary',
  size: 'small',
};

export default Button;
