import React, { useState } from 'react';
import styled from 'styled-components/macro';
import uuid from 'uuid';

import color from 'styles/color';

interface Props {
  className?: string;
  id?: string;
  label: string;
  maxLength?: number;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const padding = 0.7;

const Container = styled.div`
  position: relative;
  font-size: 1.2rem;
`;

const Input = styled.input`
  transition: border-color 250ms ease-out, box-shadow 250ms ease-out;
  width: 100%;
  margin-top: 1.1em;
  padding: ${padding}em;
  border: 0.05em solid black;
  border-radius: 0.2em;
  outline: none;
  background-color: white;
  font-size: 1em;

  :focus {
    border-color: ${color.green};
    box-shadow: 0 0 0.4em 0 rgba(0, 0, 0, 0.4);
  }

  :disabled {
    background-color: ${color.lightGreen};
    color: ${color.textLightGray};
  }
`;

const Label = styled.label`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  opacity: 0;
  transform: translateY(150%);
  transition: transform 300ms, opacity 200ms;
  padding-left: ${padding}em;
  font-size: 0.65em;
  color: ${color.textGray};

  ${Input}:not(:placeholder-shown) + & {
    transform: translateY(0);
    opacity: 1;
  }
`;

const TextInput: React.FC<Props> = ({
  className,
  disabled,
  id,
  label,
  maxLength,
  onChange,
  placeholder,
}) => {
  const [inputId] = useState<string>(id || uuid());

  return (
    <Container className={className}>
      <Input
        type="text"
        id={inputId}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        disabled={disabled}
      />
      <Label htmlFor={id}>{label}</Label>
    </Container>
  );
};

export default TextInput;
