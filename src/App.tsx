import React from 'react';

import background from './assets/Vector.png';

import Header from './components/Header/Header';
import './styles/styles.scss';

function App() {
  return (
    <>
      <main>
        <img className="background" src={background} alt="" />
        <Header />
      </main>
    </>
  );
}

export default App;
