import React from 'react';
import ReactDOM from 'react-dom';

import Ripple from './Ripple';

describe('Ripple', () => {
  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Ripple />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
