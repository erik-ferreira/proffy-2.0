import React, { FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import InputProfileTeacher from '../../components/InputProfileTeacher'
import ScheduleItem from '../../components/ScheduleItem'
import Textarea from '../../components/Textarea'
import TopBar from '../../components/TopBar'
import Fieldset from '../../components/Fieldset'
import AboutClass from '../../components/AboutClass'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import rocketImg from '../../assets/images/icons/rocket.svg'

import './style.css'

function TeacherForm() {
  const history = useHistory()
  const avatar = "https://avatars.githubusercontent.com/u/70786024?v=4"

  function handleSaveRegisterTeacher(event: FormEvent) {
    event.preventDefault()

    history.push('/success-screen', {
      title: 'Cadastro salvo!',
      description: 'Tudo certo, seu cadastro está na nossa lista de professores. Agora é so ficar de olho no seu Whatsapp.',
      labelButton: 'Acessar home'
    })
  }
  
  return (
    <div id="page-teacher-form">
      <TopBar titlePage="Dar aulas" />
      <Header 
        title="Que incrível que você quer dar aulas."
        description
        textEmoji="Prepare-se! vai ser o máximo."
        icon={rocketImg}
      />

      <main>
        <form onSubmit={handleSaveRegisterTeacher}>
          <Fieldset legend="Seus dados">
            <div className="div-data">
              <div>
                <img src={avatar} alt="avatar"/>
                <span>Erik Ferreira</span>
              </div>
              
              <div>
                <InputProfileTeacher 
                  type="text" 
                  name="whatsapp" 
                  label="Whatsapp" 
                />
              </div>
            </div>

            <Textarea />
          </Fieldset>

          <Fieldset legend="Sobre a aula">
            <AboutClass inputDisable />
          </Fieldset>

          <Fieldset
            legend="Horários disponíveis"
            showButtonNewTime
          >
            <ScheduleItem />
          </Fieldset>

          <Footer />
        </form>
      </main>
    </div>
  )
}

export default TeacherForm