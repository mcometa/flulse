import React, { useContext } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Ripple from './components/Ripple';
import Photos from './components/Photos';
import { AppContext } from './context/AppContext';
import NoResult from './components/NoResult';

const App = () => {
  const { loading, photos } = useContext(AppContext);
  return (
    <div data-testid="app-main" className="App">
      <Header />
      {photos.length > 0 ? <Photos photos={photos} /> : <NoResult />}
      {loading === true && <Ripple />}
      <Footer />
    </div>
  );
};

export default App;
