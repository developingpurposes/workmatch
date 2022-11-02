import React from "react";
import { Link } from "react-router-dom";
import Form from "../../styles/form";
import RegisterStyle from "./registerStyle";
import logo from "../../assets/logo.png";

function Register() {
  return (
    <RegisterStyle>
      <img src={logo} alt="WorkMatch Logo" />

      <section>
        <div>
          <h3>Crie sua conta</h3>
          <Link to={"/login"}>Voltar ao login</Link>
        </div>

        <Form>
          <label htmlFor="userName">Nome de usuário: </label>
          <input id="userName" type="text" placeholder="Digite seu apelido" />

          <label htmlFor="name">Nome completo: </label>
          <input id="name" type="text" placeholder="Digite seu nome" />

          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            placeholder="Digite seu melhor e-mail"
          />

          <label htmlFor="password">Senha: </label>
          <input id="password" type="text" placeholder="Digite sua senha" />

          <label htmlFor="confirmPassword">Confirmar senha: </label>
          <input
            id="confirmPassword"
            type="text"
            placeholder="Confirme sua senha"
          />

          <button type="button">Cadastrar</button>
        </Form>
      </section>
    </RegisterStyle>
  );
}

export default Register;
