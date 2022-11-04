import { Link } from "react-router-dom";
import RegisterStyle from "./registerStyle";
import logo from "../../assets/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { iRegisterUser, UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import Form from "../../styles/form";

function Register() {
  const { userRegister } = useContext(UserContext);

  const yupSchema = yup.object({
    userName: yup.string().required("É obrigatório preencher o campo nome"),
    name: yup.string().required("É obrigatório preencher o campo de nome"),
    email: yup
      .string()
      .email("Este e-mail não parece válido, tente outro!")
      .required("É obrigatório preencher o campo email"),
    password: yup
      .string()
      .matches(/[A-Z]/, "Sua senha deve ter ao menos uma letra maiúscula")
      .matches(/[a-z]/, "Sua senha deve ter ao menos uma letra minúscula")
      .matches(/(\d)/, "Sua senha deve ter ao menos um número")
      .matches(/(\W)|_/, "Sua senha deve ter ao menos um caracter especial")
      .matches(/.{6,}/, "Sua senha deve ter ao menos seis digitos")
      .required("É obrigatório escolher uma senha para sua conta"),
    verification: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "As senhas não são identicas"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUser>({ resolver: yupResolver(yupSchema) });

  return (
    <RegisterStyle>
      <img src={logo} alt="WorkMatch Logo" />

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
