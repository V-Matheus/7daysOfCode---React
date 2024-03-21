import React from 'react';

import { Container } from './HeroStyled';

import mail from '../../assets/mail.svg';

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
        <div className="heroBtn sombra">
          <div>
            <img src={mail} alt="" />
            <input placeholder="Insira seu e-mail"></input>
          </div>
          <button>Assinar newsletter</button>
        </div>
      </div>
      <div className="heroImg"></div>
    </Container>
  );
};

export default Hero;


