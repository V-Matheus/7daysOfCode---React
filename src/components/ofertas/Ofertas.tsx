import React from 'react';
import { Container } from './OfertasStyled';
import seta from '../../assets/seta.svg';

import produto1 from '../../assets/produto-01.png';
import produto2 from '../../assets/produto-02.png';
import produto3 from '../../assets/produto-03.png';
import produto4 from '../../assets/produto-04.png';
import produto5 from '../../assets/produto-05.png';
import produto6 from '../../assets/produto-06.png';

type Ofertas = {
  id: number;
  foto: string;
  titulo: string;
  preco: number;
};

const ofertas: Ofertas[] = [
  {
    id: 1,
    foto: produto1,
    titulo: 'Ajuga reptans',
    preco: 20,
  },
  {
    id: 2,
    foto: produto2,
    titulo: 'Cordyline fruticosa',
    preco: 20,
  },
  {
    id: 3,
    foto: produto3,
    titulo: 'Crassula ovata',
    preco: 20,
  },
  {
    id: 4,
    foto: produto4,
    titulo: 'Cyperus rotundus',
    preco: 20,
  },
  {
    id: 5,
    foto: produto5,
    titulo: 'Delairea odorata',
    preco: 20,
  },
  {
    id: 6,
    foto: produto6,
    titulo: 'Datura metel',
    preco: 20,
  },
];

const Ofertas = () => {
  return (
    <Container>
      <div>
        <div className="ofertasTittle">
          <span>Conheça nossas</span>
          <h1>ofertas</h1>
        </div>

        <div className="ofertasContainer">
          {ofertas.map((oferta) => (
            <div className="oferta sombra" key={oferta.id}>
              <div className="ofertaImg">
                <img src={oferta.foto} alt="" />
              </div>
              <div className="ofertaContent">
                <h1 className="titulo">{oferta.titulo}</h1>
                <span className="subtitulo">
                  R$ {oferta.preco.toFixed(2).replace('.', ',')}
                </span>
                <div className="ofertaButton">
                  <a href="#">Comprar <img src={seta} alt="" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Ofertas;
