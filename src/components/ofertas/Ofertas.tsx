import React, { useEffect, useState } from 'react';
import { Container } from './OfertasStyled';
import seta from '../../assets/seta.svg';

import produto1 from '../../assets/produto-01.png';
import produto2 from '../../assets/produto-02.png';
import produto3 from '../../assets/produto-03.png';
import produto4 from '../../assets/produto-04.png';
import produto5 from '../../assets/produto-05.png';
import produto6 from '../../assets/produto-06.png';

type Oferta = {
  name: string;
  preco: number;
  img: string;
  ordem: number;
}

const Ofertas: React.FC = () => {

  const [ofertas, setOfertas] = useState<Oferta[]>([]);

  useEffect(() => {
    const fetchOfertas = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsmi=231361624&_hsenc=p2ANqtz-_cdVM27y1J85R-RcT63pQLE0IGet4wDtmCi0-kW5-qQgb2GnELSgKq7IWEKshk-0JpGfRr0z0Ruvjmp7AtLK8ePcXg9cNSFRJmAzN1WuxCBbHR25g&utm_content=231361624&utm_source=hs_automation');
        const data = await response.json();
        setOfertas(data);
      } catch (error) {
        console.error('Erro ao obter as ofertas:', error);
      }
    };

    fetchOfertas();
  }, []);

  function getUrlImg(oferta: Oferta) {
    switch (oferta.img) {
        case 'ajuga01_card':
            return produto1
        case 'fruticosa01_card':
            return produto2
        case 'ovata01_card':
            return produto3
    }
  }

  return (
    <Container>
      <div>
        <div className="ofertasTittle">
          <div>
            <span className="subtitulo">Conheça nossas</span>
            <h1 className="titulo">ofertas</h1>
          </div>
        </div>

        <div className="ofertasContainer">
          {ofertas.map((oferta) => (
            <div className="oferta sombra" key={oferta.ordem}>
              <div className="ofertaImg">
                <img src={getUrlImg(oferta)} alt="" />
              </div>
              <div className="ofertaContent">
                <h1 className="titulo">{oferta.name}</h1>
                <span className="subtitulo">
                  R$ {oferta.preco.toFixed(2).replace('.', ',')}
                </span>
                <div className="ofertaButton">
                  <a href="#">
                    Comprar <img src={seta} alt="" />
                  </a>
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