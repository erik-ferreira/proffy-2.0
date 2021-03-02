import React from 'react'
import AboutClass from '../../components/AboutClass'
import Fieldset from '../../components/Fieldset'
import Footer from '../../components/Footer'
import InputProfileTeacher from '../../components/InputProfileTeacher'
import ScheduleItem from '../../components/ScheduleItem'
import Textarea from '../../components/Textarea'
import TopBar from '../../components/TopBar'

import './style.css'

function TeacherProfile() {
  const avatar = "https://avatars.githubusercontent.com/u/70786024?v=4"

  return (
    <div id="page-teacher-profile">
      <TopBar titlePage="Meu perfil" />
      <header>
        <div className="teacher-data">
          <img src={avatar} alt="profile teacher"/>
          <h2>Erik Ferreira</h2>
          <span>Basquete</span>
        </div>
      </header>

      <main>
        <form>
          <Fieldset legend="Seus dados">
            <div className="input-group">
              <div className="input-password">
                <InputProfileTeacher 
                  name="currentPassword" 
                  label="Senha atual" 
                  type="password" 
                />

                <InputProfileTeacher 
                  name="newPassword" 
                  label="Nova senha" 
                  type="password" 
                />

                <InputProfileTeacher 
                  name="repeatPassword" 
                  label="Repetir senha" 
                  type="password" 
                />
              </div>

              <div className="input-group-name">
                <InputProfileTeacher 
                  name="name" 
                  label="Nome" 
                  type="text" 
                />
                <InputProfileTeacher 
                  name="surname" 
                  label="Sobrenome" 
                  type="text" 
                />
              </div>

              <div className="input-section">
                <InputProfileTeacher 
                  name="email" 
                  label="E-mail" 
                  type="text" 
                />
                <InputProfileTeacher 
                  name="whatsapp" 
                  label="Whatsapp" 
                  type="text" 
                />
              </div>
            </div>

            <Textarea />
          </Fieldset>
         

          <Fieldset legend="Sobre a aula">
            <AboutClass />
          </Fieldset>

          <Fieldset 
            legend="Horários disponíveis" 
            showButtonNewTime
          >
            <ScheduleItem deleteTime />
          </Fieldset>

          <Footer />
        </form>
      </main>
    </div>
  )
}

export default TeacherProfile