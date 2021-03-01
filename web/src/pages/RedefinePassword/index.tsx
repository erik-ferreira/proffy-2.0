import React from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import Input from '../../components/Input'
import InputPassword from '../../components/InputPassword'
import PageHeader from '../../components/PageHeader'

import './style.css'

export default function RedefinePassword() {
  return (
    <div id="page-redefine-password">
      <PageHeader>
        <button>
          <HiOutlineArrowNarrowLeft size={35} color="#BDA5F6" />
        </button>
      </PageHeader>

      <form
        id="form-redefine-password"
      >
        <button id="back">
          <HiOutlineArrowNarrowLeft size={35} color="#8257E5" />
        </button>

        <fieldset>
          <legend>Vamos redefinir sua senha!</legend>

          <div>
            <Input label="Código enviado para seu e-mail" type="text" />

            <InputPassword />

            <InputPassword labelInput="Repetir senha" />
          </div>

          <button type="submit">Redefinir</button>
          
        </fieldset>
      </form>
    </div>
  )
}