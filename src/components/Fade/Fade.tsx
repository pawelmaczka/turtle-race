import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components/macro';

interface Props {
  show: boolean;
}

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Container = styled.div<{ fadeIn: boolean; fadeOut: boolean }>`
  position: relative;
  z-index: 2;

  ${({ fadeIn }) =>
    fadeIn &&
    css`
      animation: ${fadeInAnimation} 0.4s ease-in-out forwards;
    `}

  ${({ fadeOut }) =>
    fadeOut &&
    css`
      animation: ${fadeOutAnimation} 0.4s ease-in-out forwards;
    `}
`;

const Fade: React.FC<Props> = ({ children, show }) => {
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    setShouldRender(show);
  }, [show]);

  const onAnimationEnd = useCallback(() => {
    if (!show) {
      setShouldRender(false);
    }
  }, [show]);

  return (
    <Container fadeIn={shouldRender} fadeOut={!shouldRender} onAnimationEnd={onAnimationEnd}>
      {children}
    </Container>
  );
};

export default Fade;
