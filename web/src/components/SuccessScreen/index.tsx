import React, { FormEvent } from 'react'
import { RouteComponentProps, useHistory } from 'react-router-dom'

import SuccessIcon from '../../assets/images/icons/success-check-icon.svg'

import './style.css'

interface SuccessScreenProps {
  title: string;
  description: string;
  labelButton: string;
}

const SuccessScreen: React.FC<RouteComponentProps> = () => {
  const history = useHistory<SuccessScreenProps>()
  const { title, description, labelButton } = history.location.state

  function handleNavigateToPageLanding(event: FormEvent) {
    event.preventDefault()
    
    history.push('/')
  }

  return (
    <div id="success-container">
      <div id="success-content">
        <img src={SuccessIcon} alt="success icon"/>

        <span>{title}</span>
        <p>{description}</p>

        <button onClick={handleNavigateToPageLanding}>{labelButton}</button>
      </div>
    </div>
  )
}

export default SuccessScreen