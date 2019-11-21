import React, { useState } from 'react';
import styled from 'styled-components/macro';
import uuid from 'uuid';

import rem from 'styles/rem';
import color from 'styles/color';

interface Props {
  className?: string;
  id?: string;
  label: string;
  maxLength?: number;
  placeholder: string;
}

const Container = styled.div`
  position: relative;
  width: ${rem(300)};
`;

const Input = styled.input`
  width: 100%;
  margin-top: ${rem(30)};
  padding: ${rem(15)};
  border: 1px solid black;
  border-radius: ${rem(5)};
  background-color: white;
  font-size: ${rem(22)};
  transition: border-color 200ms ease-out, box-shadow 200ms ease-out;

  :focus {
    border-color: ${color.green};
    box-shadow: 0 0 ${rem(6)} 0 rgba(0, 0, 0, 0.4);
  }
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  padding-left: ${rem(15)};
  z-index: -1;
  opacity: 0;
  transform: translateY(150%);
  transition: transform 300ms, opacity 1000ms;
  font-size: ${rem(18)};
  color: ${color.textGray};

  ${Input}:not(:placeholder-shown) + & {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Text: React.FC<Props> = ({ className, id, placeholder, label, maxLength }) => {
  const [inputId] = useState<string>(id || uuid());

  return (
    <Container className={className}>
      <Input type="text" id={inputId} placeholder={placeholder} maxLength={maxLength} />
      <Label htmlFor={id}>{label}</Label>
    </Container>
  );
};

export default Text;
