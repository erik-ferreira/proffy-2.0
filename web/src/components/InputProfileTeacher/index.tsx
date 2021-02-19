import React, { InputHTMLAttributes } from 'react'

import './style.css'

interface PropsInputProfileTeacher extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
}

const InputProfileTeacher: React.FC<PropsInputProfileTeacher> = ({ name, label, type, ...rest }) => {
  return (
    <div className="input-block-profile">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...rest} />
    </div>
  )
}

export default InputProfileTeacher