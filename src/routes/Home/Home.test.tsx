import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';

import Home from './Home';

describe('Home', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });
});
