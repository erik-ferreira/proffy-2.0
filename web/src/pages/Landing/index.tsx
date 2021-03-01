import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import InputPassword from '../../components/InputPassword'

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './style.css'

function Landing() {
  const [email, setEmail] = useState('')

  // useEffect(() => {
  //   if(email.length > 0 && password.length > 0) {
  //     console.log('buttao fica verde')
  //   }
  // }, [email, password])

  return (
    <div id="page-landing">
      <PageHeader />

      <div id="form-content">
        <form id="form-login">
          <fieldset>
            <legend>Fazer login</legend>

            <div id="input-group">
              <Input 
                label="E-mail" 
                type="text"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />

              <InputPassword />
            </div>

            <div id="input-footer">
              <div className="div-checkbox">
                <input type="checkbox" name="remember" id="check-remember"/>
                <label htmlFor="check-remember">Lembrar-me</label>
              </div>

              <Link to="/forgot-password">Esqueci minha senha</Link>
            </div>

            <button type="submit">Entrar</button>

          </fieldset>
        </form>

        <footer>
          <div>
            <span>Não tem conta?</span>
            <Link to="/create-register">Cadastre-se</Link>
          </div>

          <span> É de graça <img src={purpleHeartIcon} alt="purple-heart"/></span>
        </footer>
      </div>
    </div>
  )
}

export default Landing