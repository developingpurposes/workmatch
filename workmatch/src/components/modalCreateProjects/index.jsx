import * as C from "./modalCreateCardStyle";
import imgLand from "../../assets/backgroundLandPage1.png";
import Card from "../cards";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function ModalCreateProjects({ handleModal, techs }) {
  const animatedComponents = makeAnimated();

  
  const schemaLogin = yup.object().shape({
      description: yup.string(),
      urlImg: yup.string(),
      membersLength: yup.string(),
      date: yup.string(),
      techs: yup.string(),
    });

    const{register, handleSubmit, control,  formState: {errors}}=useForm({resolver: yupResolver(schemaLogin)})
    
  const options = [
    { value: "react", label: "react" },
    { value: "typescript", label: "typescript" },
    { value: "JSvanilla", label: "JSVanilla" },
    { value: "phyton", label: "phyton" },
    { value: "node", label: "node" },
    { value: "css", label: "css" },
    { value: "html", label: "html" },
  ];

  function onSubmit(data){
    console.log(data)
  }

  return (
    <C.ContainerModal>
      <C.DivModal>
        <C.TitleModal>
          <h2>Começar Projeto</h2>
          <button>X</button>
        </C.TitleModal>
        <C.Form onSubmit={handleSubmit(onSubmit)}>
          <img src={imgLand} alt="texto alternativo" />
          <label htmlFor="description">Descrição do projeto:</label>
          <Controller
           name="firstName"
           control={control}
           render={({ register }) => <input
           id="description"
           type="text"
           placeholder="Digite a desrição do projeto"
           {...register("description")} />}
          />
          {/* <label htmlFor="urlImg">Imagem do projeto:</label>
          <input
            id="urlImg"
            type="text"
            placeholder="URL da imagem"
            {...register("urlImg")}
          />
          <label htmlFor="membersLength">Número de membros:</label>
          <input
            id="membersLength"
            type="text"
            placeholder="Digite o número de membros"
            {...register("membersLength")}
          />
          <label htmlFor="date">Data de criação do projeto:</label>
          <input
            id="date"
            type="text"
            placeholder="Digite a data de hoje"
            {...register("urlImg")}
          />

            <Controller
                as={
                <Select
                id="techs"
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={[options[4], options[5]]}
                isMulti
                options={options}
                {...register("techs")}
                />
                  }
                  name={options.name}
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                /> */}
          <C.ButtonCreate>Criar</C.ButtonCreate>
        </C.Form>
      </C.DivModal>
    </C.ContainerModal>
  );
}

export default ModalCreateProjects;
