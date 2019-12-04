import React from 'react';
import styled, { css } from 'styled-components/macro';
import Spinner from 'components/Spinner';
import color from 'styles/color';

interface Props {
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  big?: boolean;
}

const Btn = styled.button<Props>`
  display: inline-block;
  position: relative;
  opacity: 1;

  padding: 0.5em;
  border: none;
  border-radius: 0.2em;

  text-align: center;
  text-decoration: none;
  font: inherit;
  font-size: 1rem;
  color: #ffffff;
  background-color: ${color.purple};

  :hover:not(:disabled) {
    cursor: pointer;
    opacity: 0.7;
  }

  ${({ big }) =>
    big &&
    css`
      font-size: 1.5rem;
    `}
`;

const ChildrenContainer = styled.span<{ isLoading?: boolean }>`
  display: block;

  ${({ isLoading }) =>
    isLoading &&
    css`
      visibility: hidden;
    `}
`;

const Button: React.FC<Props> = ({
  children,
  type,
  onClick,
  disabled,
  isLoading,
  className,
  big,
}) => (
  <Btn
    type={type}
    onClick={onClick}
    disabled={disabled || isLoading}
    isLoading={isLoading}
    className={className}
    big={big}
  >
    {isLoading && <Spinner />}
    <ChildrenContainer isLoading={isLoading}>{children}</ChildrenContainer>
  </Btn>
);

Button.defaultProps = {
  type: 'submit',
};

export default Button;
