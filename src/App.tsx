import React from 'react';

import background from './assets/Vector.png'

import Header from './components/Header';
import './styles/styles.scss'

function App() {

  return (
    <>
      <img className='background' src={background} alt="" />
      <Header/>
    </>
  )
}

export default App
