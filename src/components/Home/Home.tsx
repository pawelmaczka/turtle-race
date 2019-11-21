import React from 'react';
import styled, { css } from 'styled-components/macro';

import TurtlePure from 'components/Turtle';
import TextPure from 'components/inputs/Text';

import device, { breakpoint } from 'styles/device';
import rem from 'styles/rem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const commonStyles = css`
  width: 90vw;

  @media ${device.mobileL} {
    width: calc(${breakpoint.mobileL} * 0.9);
  }
`;

const Turtle = styled(TurtlePure)`
  ${commonStyles}
  margin-bottom: ${rem(10)};

  @media ${device.mobileS} {
    margin-bottom: ${rem(30)};
  }
`;

const Text = styled(TextPure)`
  ${commonStyles}
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Turtle />
      <Text label="Nickname" placeholder="Choose your nickname" maxLength={20} />
    </Container>
  );
};

export default Home;