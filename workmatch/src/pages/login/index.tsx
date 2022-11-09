import { useContext } from "react";
import LoginStyle from "./loginStyle";
import { Link } from "react-router-dom";
import Form from "../../styles/form";
import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import { iUserLogin, UserContext } from "../../context/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaLogin from "./loginSchema";

function Login() {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({ resolver: yupResolver(schemaLogin) });
  return (
    <LoginStyle>
      <section className="container">
        <div>
          <img className="logo" src={logo} alt="WorkMatch Logo" />
          <h3>Seja Bem-vindo!</h3>
          <span>Login</span>
        </div>
        <Form onSubmit={handleSubmit(userLogin)}>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {errors.email ? <p className="error">{errors.email.message}</p> : ""}
          <label htmlFor="password">Senha: </label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password ? (
            <p className="error">{errors.password.message}</p>
          ) : (
            ""
          )}
          <button type="submit">Login</button>
          <h4>Ainda não é cadastrado?</h4>
          <Link className="otherButton" to={"/register"}>
            Registre-se
          </Link>
        </Form>
      </section>
    </LoginStyle>
  );
}

export default Login;
