import React from 'react'

import TopBar from '../../components/TopBar'
import InputProfileTeacher from '../../components/InputProfileTeacher'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import ScheduleItem from '../../components/ScheduleItem'
import Footer from '../../components/Footer'

import './style.css'
import Fieldset from '../../components/Fieldset'
import AboutClass from '../../components/AboutClass'

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