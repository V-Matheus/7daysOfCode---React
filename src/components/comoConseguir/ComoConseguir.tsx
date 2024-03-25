import React from 'react';
import { Container } from './ComoConseguirStyled';

import image3 from '../../assets/imagem3.png';

const ComoConseguir = () => {
  return (
    <Container className="sombra">
      <div className='comoConseguirImg'>
        <img src={image3} alt="" />
      </div>
      <div className='comoConseguirContent'>
        <span className="subtitulo">Como conseguir</span>
        <h1 className="titulo">minha planta</h1>
        <ul>
          <li className='subtitulo'>Escolha suas plantas</li>
          <li className='subtitulo'>Faça seu pedido</li>
          <li className='subtitulo'>Aguarde na sua casa</li>
        </ul>
      </div>
    </Container>
  );
};

export default ComoConseguir;
