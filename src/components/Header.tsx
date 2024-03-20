import React from 'react'
import logo from '../assets/logo.svg'
import '../styles/header.scss'

const Header = () => {
  return (
    <header>
      <nav className='container'>
        <img src={logo} alt="Logo" />
        <div>
          <ul>
            <li><a href="">Como Fazer</a></li>
            <li><a href="">Ofertas</a></li>
            <li><a href="">Depoimentos</a></li>
            <li><a href="">Vídeos</a></li>
            <li><a href="">Meu Carrinho</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header