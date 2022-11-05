import * as yup from "yup";

const schemaRegister = yup.object({
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

export default schemaRegister;
