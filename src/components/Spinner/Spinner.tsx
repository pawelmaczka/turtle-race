import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

interface Props {
  className?: string;
}

const spin = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

const show = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
`;

const Circle = styled.span`
  display: block;
  width: 1.5em;
  height: 1.5em;
  border: 0.15em solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: ${spin} 700ms linear infinite, ${show} 300ms ease-out;
  transform-origin: 50%;
`;

const Spinner: React.FC<Props> = ({ className }) => (
  <Container>
    <Circle className={className} />
  </Container>
);

export default Spinner;
