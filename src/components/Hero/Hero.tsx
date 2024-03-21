import React from 'react';

import ImageHero from '../../assets/imagem-hero 1.png';

import { Container } from './HeroStyled';

const Hero = () => {
  return (
    <Container>
      <div className="heroContent">
        <span>Sua casa com as </span>
        <h1>melhores plantas</h1>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
        <div>
          <span></span>
          <p>Insira seu e-mail</p>
          <button>Assinar newsletter</button>
        </div>
      </div>
      <div className="heroImg"></div>
    </Container>
  );
};

export default Hero;
