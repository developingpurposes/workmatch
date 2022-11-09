import * as C from "./modalCreateCardStyle";
import Select, { MultiValue } from "react-select";
import makeAnimated, { Placeholder } from "react-select/animated";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { iProject, iTechs, ProjectContext } from "../../context/ProjectContext";
import Swal from "sweetalert2";
import { DataBaseTechs } from "../../services/dataBaseTechs";

interface iSelect {
  selectValues: iTechs;
}

function ModalCreateProjects() {
  const { setShowCreateModal, createProject, setSelectTechs, image, setImage } =
    useContext(ProjectContext);
  const animatedComponents = makeAnimated();

  async function setProfilePic() {
    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload your profile picture",
      },
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const schemaLogin = yup.object().shape({
    description: yup.string().required("Campo obrigatório"),
    amount: yup.string().required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm<iProject>({
    resolver: yupResolver(schemaLogin),
  });

  const options = [
    { value: "React", label: "React" },
    { value: "Typescript", label: "Typescript" },
    { value: "JSvanilla", label: "JSVanilla" },
    { value: "Phyton", label: "Phyton" },
    { value: "Node", label: "Node" },
    { value: "Css", label: "Css" },
    { value: "Html", label: "Html" },
    { value: "Next", label: "Next" },
  ];

  return (
    <C.ContainerModal>
      <C.DivModal>
        <C.TitleModal>
          <h2>Começar Projeto</h2>
          <button
            className="button__close"
            onClick={() => setShowCreateModal(false)}
          >
            X
          </button>
        </C.TitleModal>
        <C.Form onSubmit={handleSubmit(createProject)}>
          <img onClick={setProfilePic} src={image} alt="texto alternativo" />
          <label htmlFor="urlImg">Nome do Projeto:</label>
          <input
            id="name"
            type="text"
            placeholder="Digite nome do seu projeto"
            {...register("name")}
          />
          <label htmlFor="description">Descrição do projeto:</label>
          <input
            id="description"
            type="text"
            placeholder="Digite a desrição do projeto"
            {...register("description")}
          />

          <label htmlFor="membersLength">Número de membros:</label>
          <input
            id="membersLength"
            type="text"
            placeholder="Digite o número de membros"
            {...register("amount")}
          />
          <label htmlFor="date">Adicione Tecnologia:</label>

          <Select
            id="SelectStyle"
            onChange={(selectValues: any) => {
              setSelectTechs(selectValues);
            }}
            placeholder="Escolha suas tecnologias"
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={DataBaseTechs}
          />
          <C.ButtonCreate type="submit">Criar</C.ButtonCreate>
        </C.Form>
      </C.DivModal>
    </C.ContainerModal>
  );
}

export default ModalCreateProjects;
