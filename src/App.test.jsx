/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';

import App from './App';

afterEach(cleanup);

// TODO:
// 1) Pass the mock data to the Photo component
// 2) When search is submitted, the display should output photos properly

it('renders without crashing', () => {
  const { getByText, getByTestId, container, asFragment } = render(<App />);

  const photos = jest.fn(() => {
    return {
      photos: {
        page: 1,
        pages: 93,
        perpage: 6,
        total: '557',
        photo: [
          {
            id: '48077073123',
            owner: '25872797@N02',
            secret: 'db8392063e',
            server: '65535',
            farm: 66,
            title: 'Pitcher plant (Nepenthes argentii)',
            ispublic: 1,
            isfriend: 0,
            isfamily: 0,
          },
          {
            id: '48058937143',
            owner: '25872797@N02',
            secret: '53f02bbccf',
            server: '65535',
            farm: 66,
            title: 'Steep rainforest-clad slopes',
            ispublic: 1,
            isfriend: 0,
            isfamily: 0,
          },
          {
            id: '48058924053',
            owner: '25872797@N02',
            secret: 'cca01d37c1',
            server: '65535',
            farm: 66,
            title: 'Steep slopes of Mt. Guiting-guiting',
            ispublic: 1,
            isfriend: 0,
            isfamily: 0,
          },
          {
            id: '48058969892',
            owner: '25872797@N02',
            secret: '67c42137b7',
            server: '65535',
            farm: 66,
            title: 'Nepenthes sibuyanensis',
            ispublic: 1,
            isfriend: 0,
            isfamily: 0,
          },
          {
            id: '47700590322',
            owner: '32707992@N04',
            secret: '69067470f2',
            server: '65535',
            farm: 66,
            title: 'leaving Sibuyan Island',
            ispublic: 1,
            isfriend: 0,
            isfamily: 0,
          },
          {
            id: '46914154291',
            owner: '144206081@N03',
            secret: '6f4aaf2940',
            server: '4811',
            farm: 5,
            title: 'Indigo Banded Kingfisher',
            ispublic: 1,
            isfriend: 0,
            isfamily: 0,
          },
        ],
      },
      stat: 'ok',
    };
  });

  expect(getByTestId('app-main')).toBeDefined();
});
