import React from 'react'

import './style.css'

interface PropsHeader {
  title: string;
  description?: boolean;
  textEmoji: string;
  icon: string;
}

const Header: React.FC<PropsHeader> = ({ children, title, description, textEmoji, icon }) => {
  return (
    <>
      <header className="container-header">
        <div className="content-header">
          <div className="title-section">
            <h2>{title}</h2>
            { description && 
              <span>
                O primeiro passo, é preencher esse formulário de inscrição.
              </span>
            }
          </div>

          <div className="emoji-section">
            <img src={icon} alt="rocket"/>
            <span>
              {textEmoji}
            </span>
          </div>
        </div>
      </header>

      {children}
    </>
  )
}

export default Header