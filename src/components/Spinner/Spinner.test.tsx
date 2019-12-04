import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import Spinner from './Spinner';

describe('Spinner', () => {
  it('renders without crashing', () => {
    render(<Spinner />);
  });
});
