import React from 'react';
import ReactDOM from 'react-dom';

import Search from './Search';

describe('Search', () => {
  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
