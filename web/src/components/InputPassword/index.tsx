import React, { FormEvent, useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import Input from '../Input'

interface PropsInputPassword {
  labelInput?: string;
}

const InputPassword: React.FC<PropsInputPassword> = ({ labelInput }) => {
  const [toggleInputType, setToggleInputType] = useState('password')
  const [togglePassword, setTogglePassword] = useState(false)

  function handleTogglePassword(event: FormEvent) {
    event.preventDefault()
    
    setTogglePassword(togglePassword ? false : true)

    if(toggleInputType === 'password') {
      setToggleInputType('text')
    } else {
      setToggleInputType('password')
    }
  }

  return (
    <Input
      label={labelInput ? labelInput : "Senha"}
      type={toggleInputType}
    >
      <button onClick={handleTogglePassword}>
        {togglePassword
          ? <FiEyeOff size={22} color="#8257E5" />
          : <FiEye size={22} color="#9C98A6" />
        }
      </button>
    </Input>
  )
}

export default InputPassword