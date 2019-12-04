import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import GamesListItem from './GamesListItem';

describe('GamesListItem', () => {
  it('renders without crashing', () => {
    render(<GamesListItem name="Test games" players={['Jack', 'Adam', 'Artur']} />);
  });
});
