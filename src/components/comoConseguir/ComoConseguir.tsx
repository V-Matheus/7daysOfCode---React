import React from 'react'
import { Container } from './ComoConseguirStyled'

import image3 from '../../assets/image3.png'

const ComoConseguir = () => {
  return (
    <Container className='sombra'>
      <div className='img'>
        <img src={image3} alt="" />
      </div>
      <div>
        <span className='subtitulo'>Como conseguir</span>
        <h1 className='titulo'>minha planta</h1>
        <ul>
          <li>Escolha suas plantas</li>
          <li>Faça seu pedido</li>
          <li>Aguarde na sua casa</li>
        </ul>
      </div>
    </Container>
  )
}

export default ComoConseguir