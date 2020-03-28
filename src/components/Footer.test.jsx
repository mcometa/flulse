import React from 'react';
import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  it('renders welcome message', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('hello 2019!')).toBeInTheDocument();
  });
});
