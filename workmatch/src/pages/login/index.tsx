import React from 'react'
import LoginStyle from './styles'
import { Link } from "react-router-dom";
import Form from "../../styles/form";
import logo from "../../assets/logo.png";

function Login() {
  return (
   <LoginStyle> 

     <section>
        <div>
          <img src={logo} alt="WorkMatch Logo" />
          <h3>Seja Bem-vindo!</h3>
          <Link to={"/login"}>Login</Link>
        </div>

        <Form>
          <label htmlFor="userName">Email: </label>
          <input id="userName" type="text" placeholder="Digite seu email" />

          <label htmlFor="name">Senha: </label>
          <input id="name" type="text" placeholder="Digite sua senha" />

          <button type="button">Login</button>
        </Form>
          <h4>Ainda não é cadastrado?</h4>
          <Link className='otherButton' to={"/register"}>Registre-se</Link>
      </section>
   </LoginStyle>
  )
}

export default Login