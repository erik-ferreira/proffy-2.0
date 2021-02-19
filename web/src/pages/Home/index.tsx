import React from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './style.css'

const Home = () => {
  const history = useHistory()

  function handleNavigateToProfile() {
    history.push('/teacher-profile')
  }

  return (
    <div id="page-home">
      <header>
        <button onClick={handleNavigateToProfile}>
          <img src="https://avatars.githubusercontent.com/u/70786024?v=4" alt="perfil"/>
          <span>Erik Ferreira</span>
        </button>

        <button>
          <FiPower color="#D4C2FF" size={18} />
        </button>
      </header>

      <main>
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img 
          src={landingImg}
          alt="Plataforma de estudos" 
          className="hero-image" 
        />
      </main>

      <footer>
        <div className="texts-container">
          <div className="welcome">
            <span> Seja bem-vindo. </span>
            <strong> O que deseja fazer? </strong>
          </div>

          <span className="total-connections">
            Total de 200 conexões ja realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
          </span>
        </div>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Dar aulas
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Home