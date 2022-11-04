import React, { useContext } from 'react'
import LoginStyle from './styles'
import { Link } from "react-router-dom";
import Form from "../../styles/form";
import logo from "../../assets/logo.png";
import { useForm } from 'react-hook-form';
import { iUserLogin, UserContext } from '../../context/UserContext';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Login() {

  const {userLogin} = useContext(UserContext)

  const yupSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("Preencha o campo de email."),
    password: yup.string().required("Preencha o campo com uma senha."),
  });

  const{register, handleSubmit, formState: {errors}}=useForm<iUserLogin>({resolver: yupResolver(yupSchema)})
  return (
   <LoginStyle> 

     <section>
        <div>
          <img src={logo} alt="WorkMatch Logo" />
          <h3>Seja Bem-vindo!</h3>
          <Link to={"/login"}>Login</Link>
        </div>

        <Form onSubmit={handleSubmit(userLogin)}>
          <label htmlFor="email">Email: </label>
          <input id="email" type="text" placeholder="Digite seu email" {...register("email")}/>
          {errors.email ? (
          <p>{errors.email.message}</p>
        ) : (
          ""
        )}
          <label htmlFor="password">Senha: </label>
          <input id="password" type="text" placeholder="Digite sua senha" {...register("password")}/>
          {errors.password ? (
          <p>{errors.password.message}</p>
        ) : (
          ""
        )}
          <button type="submit">Login</button>
        </Form>
          <h4>Ainda não é cadastrado?</h4>
          <Link className='otherButton' to={"/register"}>Registre-se</Link>
      </section>
   </LoginStyle>
  )
}

export default Login