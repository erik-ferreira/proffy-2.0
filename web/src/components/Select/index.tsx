import React, { SelectHTMLAttributes } from 'react'

import './style.css'

interface PropsSelect extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    label: string;
    name: string;
  }>;
}

const Select: React.FC<PropsSelect> = ({ name, label, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <div className="select-input">
        <select value="" id={name} {...rest}>
          <option value="" disabled hidden> Selecione </option>
          
          {options.map(option => (
            <option key={option.label} value={option.label}> {option.name} </option>
          ))}
        </select>
      </div>

    </div>
  )
}

export default Select