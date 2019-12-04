import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import GamesList from './GamesList';

describe('GamesList', () => {
  it('renders without crashing', () => {
    render(<GamesList />);
  });
});
