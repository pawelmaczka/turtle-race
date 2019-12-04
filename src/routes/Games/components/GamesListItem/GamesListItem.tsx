import React from 'react';
import styled from 'styled-components/macro';
import Btn from 'components/Button';

import device from 'styles/device';
import color from 'styles/color';

interface Props {
  name: string;
  players: string[];
}

const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  margin-bottom: 0.5em;
  padding: 1em;
  border: 0.05em black solid;
  border-radius: 0.5em;
  background-color: ${color.pureWhite};

  @media ${device.mobileL} {
    flex-direction: row;
    align-items: center;
  }
`;

const ContentWrapper = styled.div`
  @media ${device.mobileL} {
    flex-grow: 2;
  }
`;

const Name = styled.h1`
  margin: 0 0 0.5em 0;
`;

const Players = styled.div`
  max-width: calc(90vw - 2em);

  @media ${device.mobileL} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    max-width: calc(90vw - 7em);
  }
`;

const Player = styled.div`
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${device.mobileL} {
    /* width: 50%; */
    padding-right: 1em;
    font-size: 0.9em;
  }
`;

const Button = styled(Btn)`
  width: 100%;
  margin-top: 1em;

  @media ${device.mobileL} {
    width: 5em;
    margin: 0;
  }
`;

const GamesListItem: React.FC<Props> = ({ name, players }) => {
  return (
    <Container>
      <ContentWrapper>
        <Name>{name}</Name>
        <Players>
          {players.map((player) => (
            <Player key={player} title={player}>
              {player}
            </Player>
          ))}
        </Players>
      </ContentWrapper>
      <Button>Join</Button>
    </Container>
  );
};

export default GamesListItem;
