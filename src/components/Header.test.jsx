import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('renders welcome message', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Flulse')).toBeInTheDocument();
    expect(getByText('Unsplash + React example by mcometa')).toBeInTheDocument();
  });
});
