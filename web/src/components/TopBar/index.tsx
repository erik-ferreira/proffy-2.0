import React from 'react'
import { useHistory } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

import logoImg from '../../assets/images/logo.svg'

import './style.css'

interface PropsTopBar {
  titlePage: string;
}

const TopBar: React.FC<PropsTopBar> = ({ titlePage }) => {
  const history = useHistory()

  function handleNavigateToBackHome() {
    history.goBack()
  }

  return (
    <div id="page-header">
        <button onClick={handleNavigateToBackHome}>
          <HiOutlineArrowNarrowLeft size={35} color="#BDA5F6" />
        </button>

        <span>{titlePage}</span>

        <img src={logoImg} alt="proffy"/>
      </div>
  )
}

export default TopBar