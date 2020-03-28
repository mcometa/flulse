import React from 'react';
import ReactDOM from 'react-dom';

import Photo from './Photo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const { id, url, title } = {
    id: 'dummyId',
    url: 'http://dummy.url',
    title: 'dummy title',
  };

  ReactDOM.render(<Photo id={id} url={url} title={title} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
