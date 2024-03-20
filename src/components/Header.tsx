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
            <li>Como Fazer</li>
            <li>Ofertas</li>
            <li>Depoimentos</li>
            <li>Vídeos</li>
            <li>Meu Carrinho</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header