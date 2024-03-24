import React from 'react';
import { Container } from './OfertasStyled';
import seta from '../../assets/seta.svg';

const Ofertas = () => {
  return (
    <Container>
      <div>
        <div className='ofertasTittle'>
          <span>Conheça nossas</span>
          <h1>ofertas</h1>
        </div>

        <div className='ofertasContainer'>
          <div className="oferta">
            <div className="ofertaImg">
              <img src="" alt="" />
            </div>
            <div className='ofertaContent'>
              <h1>Ajuga reptans</h1>
              <span>R$ 20,00</span>
              <div className='ofertaButton'>
                <a href="#">Comprar</a>
                <img src={seta} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Ofertas;
