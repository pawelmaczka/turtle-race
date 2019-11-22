import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components/macro';

import TurtlePure from 'components/Turtle';
import TextInputPure from 'components/TextInput';
import Button from 'components/Button';

import device, { breakpoint } from 'styles/device';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
`;

const commonStyles = css`
  width: 90vw;
  margin-bottom: 0.4em;

  @media ${device.mobileL} {
    width: calc(${breakpoint.mobileL} * 0.9);
    margin-bottom: 1em;
  }
`;

const Turtle = styled(TurtlePure)`
  ${commonStyles}
`;

const TextInput = styled(TextInputPure)`
  ${commonStyles}

  z-index: 1;
`;

const Buttons = styled.div<{ hidden?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90vw;
  transition: opacity 300ms ease-out 400ms;
  transform: translateY(0);

  ${({ hidden }) =>
    hidden &&
    css`
      opacity: 0;
    `}


  @media ${device.mobileL} {
    flex-direction: row;
    transition: 300ms ease-out;
    width: calc(${breakpoint.mobileL} * 0.9);

    ${({ hidden }) =>
      hidden &&
      css`
        transform: translateY(-100%);
      `}
  }
`;

const Home: React.FC = () => {
  const [areButtonsDisabled, setAreButtonsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onNicknameChange = useCallback(
    ({ currentTarget }) => {
      if (currentTarget.value.length >= 3 && areButtonsDisabled) {
        setAreButtonsDisabled(false);
      } else if (currentTarget.value.length < 3 && !areButtonsDisabled) {
        setAreButtonsDisabled(true);
      }
    },
    [areButtonsDisabled]
  );

  return (
    <Container>
      <Turtle />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('submit');
        }}
      >
        <TextInput
          label="Nickname (min 3 chars)"
          placeholder="Choose your nickname"
          maxLength={20}
          onChange={onNicknameChange}
          disabled={isLoading}
        />
        <Buttons hidden={areButtonsDisabled}>
          <Button
            onClick={() => {
              setIsLoading(true);
              console.log('hello');
            }}
            disabled={areButtonsDisabled}
            isLoading={isLoading}
            type="submit"
          >
            New Game
          </Button>
          <Button disabled={areButtonsDisabled} type="button">
            Find Game
          </Button>
        </Buttons>
      </form>
    </Container>
  );
};

export default Home;
