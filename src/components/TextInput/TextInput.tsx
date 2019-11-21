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
}

const padding = '0.7em';

const Container = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 1.1em;
  padding: ${padding};
  border: 1px solid black;
  border-radius: 0.2em;
  background-color: white;
  font-size: 1em;
  transition: border-color 250ms ease-out, box-shadow 250ms ease-out;

  :focus {
    border-color: ${color.green};
    box-shadow: 0 0 0.3em 0 rgba(0, 0, 0, 0.4);
  }
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  padding-left: ${padding};
  z-index: -1;
  opacity: 0;
  transform: translateY(150%);
  transition: transform 300ms, opacity 200ms;
  font-size: 0.65em;
  color: ${color.textGray};

  ${Input}:not(:placeholder-shown) + & {
    transform: translateY(0);
    opacity: 1;
  }
`;

const TextInput: React.FC<Props> = ({ className, id, placeholder, label, maxLength }) => {
  const [inputId] = useState<string>(id || uuid());

  return (
    <Container className={className}>
      <Input type="text" id={inputId} placeholder={placeholder} maxLength={maxLength} />
      <Label htmlFor={id}>{label}</Label>
    </Container>
  );
};

export default TextInput;
