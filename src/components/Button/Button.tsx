import React from 'react';
import styled, { css } from 'styled-components/macro';
import Spinner from 'components/Spinner';
import color from 'styles/color';

interface Props {
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

const Btn = styled.button<Props>`
  display: inline-block;
  position: relative;
  opacity: 1;

  padding: 0.5em;
  border: none;
  border-radius: 0.2em;
  margin-bottom: 0.8em;

  text-align: center;
  text-decoration: none;
  font: inherit;
  font-size: 1.5rem;
  color: #ffffff;
  background-color: ${color.purple};

  :hover:not(:disabled) {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const ChildrenContainer = styled.span<{ isLoading?: boolean }>`
  display: block;

  ${({ isLoading }) =>
    isLoading &&
    css`
      visibility: hidden;
    `}
`;

const Button: React.FC<Props> = ({ children, type, onClick, disabled, isLoading }) => (
  <Btn type={type} onClick={onClick} disabled={disabled || isLoading} isLoading={isLoading}>
    {isLoading && <Spinner />}
    <ChildrenContainer isLoading={isLoading}>{children}</ChildrenContainer>
  </Btn>
);

Button.defaultProps = {
  type: 'submit',
};

export default Button;
