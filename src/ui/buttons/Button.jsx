import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    font-size: var(--font-xsmall);
    padding: 0.8rem 1.2rem;
    text-transform: uppercase;

    @media (min-width: 61.25em) {
      font-size: var(--font-small);
    }
  `,
};

const variations = {
  primary: css`
    color: var(--color-blue);
    background-color: var(--background-secondary);
    width: fit-content;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);
  `,
  secondary: css`
    color: var(--color-green);
    background-color: var(--background-secondary);
    width: fit-content;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);
  `,
};

const Button = styled.button`
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
