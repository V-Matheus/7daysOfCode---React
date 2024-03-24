import React from 'react';

import './index.css';

import background from './assets/Vector.png';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ComoConseguir from './components/comoConseguir/ComoConseguir';
import { StylesGlobais } from './styles/stylesGlobais';
import Ofertas from './components/ofertas/Ofertas';
function App() {
  return (
    <>
      <main>
        <StylesGlobais/>
        <img className="background" src={background} alt="" />
        <Header />
        <Hero />
        <ComoConseguir/>
        <Ofertas/>
      </main>
    </>
  );
}

export default App;
