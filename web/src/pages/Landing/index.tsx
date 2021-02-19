import React, { useState, FormEvent } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './style.css'

function Landing() {
  const [toggleInputType, setToggleInputType] = useState('password')
  const [togglePassword, setTogglePassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // useEffect(() => {
  //   if(email.length > 0 && password.length > 0) {
  //     console.log('buttao fica verde')
  //   }
  // }, [email, password])

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

              <Input 
                label="Senha" 
                type={toggleInputType}
              >
                <button onClick={handleTogglePassword}>
                  {togglePassword 
                    ? <FiEyeOff size={22} color="#8257E5" />
                    : <FiEye size={22} color="#9C98A6" />
                  }
                </button>
              </Input>
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