import React, { useEffect, useState } from 'react';

import { Container } from './HeroStyled';

import mail from '../../assets/mail.svg';

const Hero = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    verificarRegex();
  }

  function verificarRegex() {
    const validacao = () => {
      if (regex.test(value)) {
        return true;
      } else {
        return false;
      }
    };

    const regexOk = validacao();

    if (value.length === 0) {
      setError('Digite um valor');
    } else if (!regexOk) {
      setError('Digite um Email válido');
    } else {
      setError('');
    }
  }

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
            <input
              value={value}
              onChange={handleChange}
              onBlur={verificarRegex}
              placeholder="Insira seu e-mail"
            ></input>
            {error && <span>{error}</span>}
          </div>
          <button>Assinar newsletter</button>
        </div>
      </div>
      <div className="heroImg"></div>
    </Container>
  );
};

export default Hero;
