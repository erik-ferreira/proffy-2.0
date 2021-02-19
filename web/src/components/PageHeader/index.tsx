import React from 'react'

import logoImg from '../../assets/images/logo.svg'

import './style.css'

const PageHeader: React.FC = ({ children }) => {
  return (
    <div id="header-container">
      {children}
      <div id="header-content">
        <img src={logoImg} alt="proffy"/>
        <span>Sua plataforma de estudos online.</span>
      </div>
    </div>
  )
}

export default PageHeader