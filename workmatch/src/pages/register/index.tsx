import { Link, useNavigate } from "react-router-dom";
import RegisterStyle from "./registerStyle";
import logo from "../../assets/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { iRegisterUser, UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import schemaRegister from "./registerSchema";
import { RiLoginBoxFill as IconLogin } from "react-icons/ri";
import Form from "../../styles/form";

function Register() {
  const { userRegister } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("WorkMatch:token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

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
          <Link className="btnBackLogin" to={"/login"}>
            Ir ao login <IconLogin />
          </Link>
        </div>

        <Form onSubmit={handleSubmit(userRegister)}>
          <label htmlFor="userName">Nome de usuário: </label>
          <input
            id="userName"
            type="text"
            placeholder="Digite seu apelido"
            {...register("userName")}
          />
          <p className="error">{errors.userName?.message}</p>

          <label htmlFor="name">Nome completo: </label>
          <input
            id="name"
            type="text"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          <p className="error">{errors.name?.message}</p>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            placeholder="Digite seu melhor e-mail"
            {...register("email")}
          />
          <p className="error">{errors.email?.message}</p>

          <label htmlFor="password">Senha: </label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <p className="error">{errors.password?.message}</p>

          <label htmlFor="verification">Confirmar senha: </label>

          <input
            id="verification"
            type="password"
            placeholder="Confirme sua senha"
            {...register("verification")}
          />

          <p className="error">{errors.verification?.message}</p>

          <button type="submit">Cadastrar</button>
        </Form>
      </section>
    </RegisterStyle>
  );
}
export default Register;
