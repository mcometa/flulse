import React from 'react';
import { render } from '@testing-library/react';

import { photos } from '../__mocks__/photos';

import Photos from './Photos';

jest.mock('axios');

it('renders without crashing', async () => {
  const { getByTestId } = render(<Photos photos={photos} />);
  const element = getByTestId('photos');

  expect(element).toBeInTheDocument();
});
