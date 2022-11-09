import EditProfileStyle from "./editProfileStyle";
import Form from "../../styles/form";
import { iUserProfile, UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Swal from "sweetalert2";
import { ProjectContext } from "../../context/ProjectContext";
import api from "../../services";
import { ToastError, ToastSuccess } from "../../services/toast";

function EditProfile() {
  const { image, setImage, setProfile, profile } = useContext(UserContext);
  const { register, handleSubmit } = useForm<iUserProfile>();
  const { setShowEditModal, setSelectTechs } = useContext(ProjectContext);
  const animatedComponents = makeAnimated();
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

  async function editProfile(info: iUserProfile) {
    const token = localStorage.getItem("WorkMatch:token");
    const userId = localStorage.getItem("WorkMatch:userId");

    if (info.avatar_url === "") {
      info.avatar_url = profile.avatar_url;
    }
    if (info.bio === "") {
      info.bio = profile.bio;
    }
    if (info.contact === "") {
      info.contact = profile.contact;
    }

    if (info.userName === "") {
      info.userName = profile.userName;
    }
    if (info.level === "") {
      info.level = profile.level;
    }

    const dataEditProfile = { ...info, avatar_url: image };

    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/users/${userId}`, dataEditProfile);
      ToastSuccess.fire({
        icon: "success",
        iconColor: "#168821",
        title: `Usuario modificado com sucesso!`,
      });
      setShowEditModal(false);
      setProfile(dataEditProfile);
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Não foi possivel atualizar seu perfil`,
      });
    }
  }
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

  return (
    <EditProfileStyle>
      <section>
        <div className="section__container">
          <h3>Editar Perfil</h3>
          <span onClick={() => setShowEditModal(false)}>X</span>
        </div>
        <img
          onClick={() => setProfilePic()}
          src={image}
          alt="Change user icon"
        />
        <p>Trocar foto</p>
        <Form onSubmit={handleSubmit(editProfile)}>
          <label htmlFor="userName">Editar nome de usuário: </label>
          <input
            id="userName"
            type="text"
            placeholder="Digite um novo apelido"
            {...register("userName")}
          />

          <label htmlFor="bio">Editar bio: </label>
          <input
            id="bio"
            type="text"
            placeholder="Digite uma nova bio"
            {...register("bio")}
          />
          <label htmlFor="contact">Editar contato: </label>
          <input
            id="contact"
            type="text"
            placeholder="Digite um novo contato"
            {...register("contact")}
          />
          <label htmlFor="techs">Editar tecnologias: </label>
          <Select
            id="SelectStyle"
            onChange={(selectValues: any) => {
              setSelectTechs(selectValues);
            }}
            placeholder="Tecnologias..."
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options}
          />
          <label htmlFor="level">Editar nível: </label>
          <select {...register("level")}>
            <option value={""}>Selecione um novo nível</option>
            <option value={"Júnior"}>Júnior</option>
            <option value={"Pleno"}>Pleno</option>
            <option value={"Sênior"}>Sênior</option>
          </select>

          <button type="submit">Editar</button>
        </Form>
      </section>
    </EditProfileStyle>
  );
}
export default EditProfile;
