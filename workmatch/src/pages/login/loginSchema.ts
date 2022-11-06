import * as yup from "yup";


const schemaLogin = yup.object().shape({
     email: yup
       .string()
       .email("Email inválido")
       .required("Preencha o campo de email."),
     password: yup.string().required("Preencha o campo com uma senha."),
});


export default schemaLogin 