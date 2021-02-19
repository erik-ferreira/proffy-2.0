import React from 'react'

import warningImg from '../../assets/images/icons/warning.svg'

import './style.css'

function Footer() {
  return (
    <footer id="content-footer">
      <p>
        <img src={warningImg} alt="Aviso importante"/>

        <div className="text-footer">
          <span>Importante!</span>
          Preencha todos os dados
        </div>
      </p>
      <button type="submit">
        Salvar cadastro
      </button>
    </footer>
  )
}

export default Footer