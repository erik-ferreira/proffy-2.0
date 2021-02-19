import React, { useState, FormEvent } from 'react'
import { FiEyeOff, FiEye } from 'react-icons/fi'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'

import './style.css'

function CreateRegister() {
  const history = useHistory()

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

  function handleNavigateToPageLanding(event: FormEvent) {
    event.preventDefault()
    
    history.push('/')
  }

  function handleFinalizedRegistration(event: FormEvent) {
    event.preventDefault()

    history.push('/success-screen', {
      title: 'Cadastro Concluído',
      description: 'Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência.',
      labelButton: 'Fazer Login'
    })
  }

  return (
    <div id="page-create-register">
      <PageHeader>
        <button onClick={handleNavigateToPageLanding}>
          <HiOutlineArrowNarrowLeft size={35} color="#BDA5F6" />
        </button>
      </PageHeader>

      <form 
        id="form-create-register" 
        onSubmit={handleFinalizedRegistration}
      >
        <button id="back" onClick={handleNavigateToPageLanding}>
          <HiOutlineArrowNarrowLeft size={35} color="#8257E5" />
        </button>

        <fieldset>
          <legend>Cadastro</legend>

          <span>
            Preencha os dados abaixo para começar.
          </span>

          <div>
            <Input label="Nome" type="text" />
            <Input label="Sobrenome" type="text" />
            <Input label="E-mail" type="email" />
            <Input label="Senha" type={toggleInputType}>
              <button  onClick={handleTogglePassword}>
                {togglePassword 
                  ? <FiEyeOff size={22} color="#8257E5" />
                  : <FiEye size={22} color="#9C98A6" />
                }
              </button>
            </Input>
          </div>

          <button type="submit">Concluir cadastro</button>

        </fieldset>
      </form>

    </div>
  )
}

export default CreateRegister