import React from 'react'

import Select from '../Select'
import InputProfileTeacher from '../InputProfileTeacher'

import './style.css'

interface PropsAboutClass {
  inputDisable?: boolean;
}

const AboutClass: React.FC<PropsAboutClass> = ({ inputDisable }) => {
  return (
    <div className="input-section">
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
          { label: 'Química', name: 'Química'},
        ]}
      />

      <InputProfileTeacher 
        name="hora-aula" 
        label="Custo da sua hora por aula"
        type="text"
        disabled={inputDisable}
        value="R$ 20,00"
      />
    </div>
  )
}

export default AboutClass