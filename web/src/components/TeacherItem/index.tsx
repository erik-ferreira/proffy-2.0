import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem() {
  const avatar = "https://avatars.githubusercontent.com/u/70786024?v=4"

  return (
    <>
      <article className="teacher-item">
        <header>
          <img src={avatar} alt="Erik" />
          <div>
            <strong>Erik Ferreira</strong>
            <span>Javascript</span>
          </div>
        </header>

        <main>
          <p>
            Apaixonado por explodir coisas em laboratório e por mudar a vida
            das pessoas através de experiências. Mais de 200.000 pessoas já
            passaram por uma das minhas explosões.
          </p>

          <ul>
            <li>
              <div>
                <span>Dia</span>
                <span>Segunda</span>
              </div>
              <div>
                <span>Horário</span>
                <span>8h - 18h</span>
              </div>
            </li>
            <li>
              <div>
                <span>Dia</span>
                <span>Segunda</span>
              </div>
              <div>
                <span>Horário</span>
                <span>8h - 18h</span>
              </div>
            </li>
            <li>
              <div>
                <span>Dia</span>
                <span>Segunda</span>
              </div>
              <div>
                <span>Horário</span>
                <span>8h - 18h</span>
              </div>
            </li>
            <li>
              <div>
                <span>Dia</span>
                <span>Segunda</span>
              </div>
              <div>
                <span>Horário</span>
                <span>8h - 18h</span>
              </div>
            </li>
            <li>
              <div>
                <span>Dia</span>
                <span>Segunda</span>
              </div>
              <div>
                <span>Horário</span>
                <span>8h - 18h</span>
              </div>
            </li>
          </ul>
        </main>
      </article>
      
      <footer className="content-footer">
        <p>
          Preço/hora
          <strong> R$ 20,00 </strong>
        </p>
        <a href="https://twitch.com/gaules">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </>
  )
}

export default TeacherItem