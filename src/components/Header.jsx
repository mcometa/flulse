import React from 'react';

import Search from './Search';

const Header = () => (
  <header className="App-header">
    <h2 className="logoText">
      Flulse
      <br />
      <small> Unsplash + React example by mcometa </small>
    </h2>
    <Search />
  </header>
);

export default Header;
