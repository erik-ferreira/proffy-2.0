import React, { FormEvent } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";

import "./style.css";

function CreateRegister() {
  const history = useHistory();

  function handleNavigateToPageLanding(event: FormEvent) {
    event.preventDefault();

    history.push("/");
  }

  function handleFinalizedRegistration(event: FormEvent) {
    event.preventDefault();

    history.push("/success-screen", {
      title: "Cadastro Concluído",
      description:
        "Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência.",
      labelButton: "Fazer Login",
    });
  }

  return (
    <div id="page-create-register">
      <PageHeader>
        <button onClick={handleNavigateToPageLanding}>
          <HiOutlineArrowNarrowLeft size={35} color="#BDA5F6" />
        </button>
      </PageHeader>

      <form id="form-create-register" onSubmit={handleFinalizedRegistration}>
        <button id="back" onClick={handleNavigateToPageLanding}>
          <HiOutlineArrowNarrowLeft size={35} color="#8257E5" />
        </button>

        <fieldset>
          <legend>Cadastro</legend>

          <span>Preencha os dados abaixo para começar.</span>

          <div>
            <Input label="Nome" type="text" />
            <Input label="Sobrenome" type="text" />
            <Input label="E-mail" type="email" />
            <InputPassword />
          </div>

          <button id="button-complete" type="submit">
            Concluir cadastro
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default CreateRegister;
