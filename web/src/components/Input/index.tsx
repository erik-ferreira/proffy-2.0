import React, { InputHTMLAttributes } from 'react'

import './style.css'

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
}

const Input: React.FC<PropsInput> = ({ label, type, children, ...rest }) => {
  return (
    <div className="input-block">
        <input type={type} placeholder=" " {...rest} />
        <label>{label}</label>
        {children}
    </div>
  )
}

export default Input