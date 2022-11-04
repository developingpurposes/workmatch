import { Link } from "react-router-dom";
import RegisterStyle from "./registerStyle";
import logo from "../../assets/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { iRegisterUser, UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import Form from "../../styles/form";
import schemaRegister from "./registerSchema";

function Register() {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUser>({ resolver: yupResolver(schemaRegister) });

  return (
    <RegisterStyle>
      <img className="logo" src={logo} alt="WorkMatch Logo" />

      <section>
        <div>
          <h3>Crie sua conta</h3>
          <Link to={"/login"}>Voltar ao login</Link>
        </div>

        <Form onSubmit={handleSubmit(userRegister)}>
          <label htmlFor="userName">Nome de usuário: </label>
          <input
            id="userName"
            type="text"
            placeholder="Digite seu apelido"
            {...register("userName")}
          />
          <span>{errors.userName?.message}</span>

          <label htmlFor="name">Nome completo: </label>
          <input
            id="name"
            type="text"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>

          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            placeholder="Digite seu melhor e-mail"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="password">Senha: </label>
          <input
            id="password"
            type="text"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <label htmlFor="verification">Confirmar senha: </label>
          <input
            id="verification"
            type="text"
            placeholder="Confirme sua senha"
            {...register("verification")}
          />
          <span>{errors.verification?.message}</span>

          <button type="submit">Cadastrar</button>
        </Form>
      </section>
    </RegisterStyle>
  );
}

export default Register;
