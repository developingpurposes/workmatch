import * as yup from "yup";

const schemaRegister = yup.object({
  userName: yup.string().required("É obrigatório preencher o nickname"),
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
    .matches(/.{6}/, "Sua senha deve ter ao menos seis digitos")
    .required("Senha obrigatório"),
  verification: yup
    .string()
    .required("Confirma senha obrigatório")
    .oneOf([yup.ref("password")], "Confirma senha está diferente"),
});

export default schemaRegister;
