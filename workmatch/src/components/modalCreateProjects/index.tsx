import * as C from "./modalCreateCardStyle";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { iProject, ProjectContext } from "../../context/ProjectContext";
import Swal from "sweetalert2";
import { DataBaseTechs } from "../../services/dataBaseTechs";

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
    amount: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[1-8]$/, "Apenas números max: 8"),
    name: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iProject>({
    resolver: yupResolver(schemaLogin),
  });

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
          <label htmlFor="urlImg">
            Nome do Projeto: <span>{errors.name?.message}</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Digite nome do seu projeto"
            {...register("name")}
          />
          <label htmlFor="description">
            Descrição do projeto: <span>{errors.description?.message}</span>
          </label>
          <input
            id="description"
            type="text"
            placeholder="Digite a desrição do projeto"
            {...register("description")}
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
          <label htmlFor="membersLength">
            Número de membros: <span>{errors.amount?.message}</span>
          </label>
          <input
            id="membersLength"
            type="text"
            placeholder="Digite o número de membros"
            {...register("amount")}
          />

          <C.ButtonCreate type="submit">Criar</C.ButtonCreate>
        </C.Form>
      </C.DivModal>
    </C.ContainerModal>
  );
}

export default ModalCreateProjects;
