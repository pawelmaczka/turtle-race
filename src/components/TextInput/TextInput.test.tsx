import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import TextInput from './TextInput';

describe('TextInput', () => {
  it('renders without crashing', () => {
    render(<TextInput id="testId" label="Nickname" placeholder="Please enter your nickname" />);
  });
});
