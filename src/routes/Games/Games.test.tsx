import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import Games from './Games';

describe('Games', () => {
  it('renders without crashing', () => {
    render(<Games />);
  });
});
