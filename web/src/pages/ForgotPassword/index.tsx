import React, { FormEvent } from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'

import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'

import './style.css'

function ForgotPassword() {
  const history = useHistory()

  function handleNavigateToPageLanding() {
    history.push('/')
  }

  function handleResetPasswordSent(event: FormEvent) {
    event.preventDefault()

    history.push('/success-screen', {
      title: 'Redefinição enviada!',
      description: 'Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos.',
      labelButton: 'Voltar ao login'
    })
  }

  return (
    <div id="page-forgot-password">
      <PageHeader>
        <button onClick={handleNavigateToPageLanding}>
          <HiOutlineArrowNarrowLeft size={35} color="#BDA5F6" />
        </button>
      </PageHeader>

      <form 
        id="form-forgot-password" 
        onSubmit={handleResetPasswordSent}
      >
        <button id="back" onClick={handleNavigateToPageLanding}>
          <HiOutlineArrowNarrowLeft size={35} color="#8257E5" />
        </button>

        <fieldset>
          <legend>Eita, esqueceu sua senha?</legend>

          <span>
            Não esquenta, vamos dar um jeito nisso.
          </span>
          
          <Input label="E-mail" type="email" />

          <button type="submit">Enviar</button>

        </fieldset>
      </form>

    </div>
  )
}

export default ForgotPassword