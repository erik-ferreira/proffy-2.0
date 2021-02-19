import React from 'react'

import Select from '../Select'
import InputProfileTeacher from '../InputProfileTeacher'

import './style.css'

interface PropsScheduleItem {
  deleteTime?: boolean;
}

const ScheduleItem: React.FC<PropsScheduleItem> = ({ deleteTime }) => {
  return (
    <div className="schedule-item">
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
                name="from" 
                label="Das" 
                type="time"
              />
              <InputProfileTeacher 
                name="to" 
                label="Até" 
                type="time" 
              />
              
              { deleteTime && (
                <div className="button-container">
                  <button>Excluir horário</button>
                </div>
              )}
            </div>
  )
}

export default ScheduleItem