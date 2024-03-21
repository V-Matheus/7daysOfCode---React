import React from 'react';

import './index.css';

import background from './assets/Vector.png';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <main>
        <img className="background" src={background} alt="" />
        <Header />
        <Hero />
      </main>
    </>
  );
}

export default App;
