import React from 'react';
import styled from 'styled-components/macro';

import device, { breakpoint } from 'styles/device';

import GamesList from './components/GamesList';
import GamesListItem from './components/GamesListItem';

const Container = styled.div`
  width: 90vw;

  @media ${device.laptop} {
    width: calc(${breakpoint.laptop} * 0.9);
  }
`;

const singleItemMock = {
  name: 'Example game',
  players: ['Grzegorz Brzeczyszczykiewicz z radomia', 'Adam', 'Gosia', 'Kasia', 'Zdzisiek'],
};

const items = Array(20).fill(singleItemMock);

const Games: React.FC = () => {
  return (
    <Container>
      <GamesList>
        {items.map((item) => (
          <GamesListItem key={Math.random()} name={item.name} players={item.players} />
        ))}
      </GamesList>
    </Container>
  );
};

export default Games;
