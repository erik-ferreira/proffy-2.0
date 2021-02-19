import React from 'react'

import Header from '../../components/Header'
import TopBar from '../../components/TopBar'
import Select from '../../components/Select'
import InputProfileTeacher from '../../components/InputProfileTeacher'
import TeacherItem from '../../components/TeacherItem'

import smileIcon from '../../assets/images/icons/smile.svg'

import './style.css'

function TeacherList() {  
  return (
    <div id="page-teacher-list" className="content">
      <TopBar titlePage="Estudar" />

      <Header 
        title="Estes são os proffys disponíveis."
        textEmoji="Nós temos 32 professores."
        icon={smileIcon}
      >
        <form id="search-teachers">
          <Select
            name="subjec" 
            label="Matéria"
            options={[
              { label: 'Artes', name: 'Artes'},
              { label: 'Biologia', name: 'Biologia'},
              { label: 'Ciências', name: 'Ciências'},
              { label: 'Educação física', name: 'Educação física'},
              { label: 'Física', name: 'Física'},
              { label: 'Geografia', name: 'Geografia'},
              { label: 'História', name: 'História'},
              { label: 'Matemática', name: 'Matemática'},
              { label: 'Português', name: 'Português'},
              { label: 'Química', name: 'Matemática'},
            ]}
          />
          <Select 
            name="week_day" 
            label="Dia da semana"
            options={[
              { label: '0', name: 'Domingo'},
              { label: '1', name: 'Segunda-feira'},
              { label: '2', name: 'Terça-feira'},
              { label: '3', name: 'Quarta-feira'},
              { label: '4', name: 'Quinta-feira'},
              { label: '5', name: 'Sexta-feira'},
              { label: '6', name: 'Sábado'},
            ]}
          />
          <InputProfileTeacher 
            type="time" 
            name="time"
            label="Hora"
          />

          <div className="button-container">
            <button type="submit"> Buscar </button>
          </div>
        </form>
      </Header>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>      
    </div>
  )
}

export default TeacherList