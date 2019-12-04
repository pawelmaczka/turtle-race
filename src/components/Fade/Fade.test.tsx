import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import Fade from './Fade';

describe('Fade', () => {
  it('renders without crashing', () => {
    render(<Fade show />);
  });
});
