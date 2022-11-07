import EditProfileStyle from "./editProfileStyle";
import profilePic from "../../assets/account.png";
import Form from "../../styles/form";
import { iUserProfile, UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { ProjectContext } from "../../context/ProjectContext";

function EditProfile() {
  const { editProfile } = useContext(UserContext);
  const { register, handleSubmit } = useForm<iUserProfile>();
  const [image, setImage] = useState(profilePic);
  const [infoC, setInfo] = useState({});
  const { setShowEditModal } = useContext(ProjectContext);

  function infoChanges(data: iUserProfile) {
    if (data.userName !== "") {
      setInfo({ ...infoC, userName: data.userName });
    }
    if (data.name !== "") {
      setInfo({ ...infoC, name: data.name });
    }
    if (data.bio !== "") {
      setInfo({ ...infoC, bio: data.bio });
    }
    if (data.contact !== "") {
      setInfo({ ...infoC, contact: data.contact });
    }
    if (data.level !== "") {
      setInfo({ ...infoC, level: data.level });
    }

    editProfile(infoC);
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
        console.log(e.target.result);
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <EditProfileStyle>
      <section>
        <div>
          <h3>Editar Perfil</h3>
          <span onClick={() => setShowEditModal(false)}>X</span>
        </div>
        <img
          onClick={() => setProfilePic()}
          src={image}
          alt="Change user icon"
        />
        <p>Trocar foto</p>
        <Form onSubmit={handleSubmit(infoChanges)}>
          <label htmlFor="userName">Editar nome de usuário: </label>
          <input
            id="userName"
            type="text"
            placeholder="Digite um novo apelido"
            {...register("userName")}
          />
          {/* <label htmlFor="name">Editar nome completo: </label>
          <input
            id="name"
            type="text"
            placeholder="Digite um novo nome"
            {...register("name")}
          /> */}
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
          <input
            id="techs"
            type="text"
            placeholder="Digite suas tecnologias"
            {...register("techs")}
          />
          <label htmlFor="level">Editar nível: </label>
          <select {...register("level")}>
            <option value={""}>Selecione um novo nível</option>
            <option value={"junior"}>Júnior</option>
            <option value={"pleno"}>Pleno</option>
            <option value={"senior"}>Sênior</option>
          </select>
          {/* <label htmlFor="password">Editar senha: </label>
          <input
            id="password"
            type="text"
            placeholder="Digite suas nova senha"
            {...register("password")}
          /> */}
          <button type="submit">Editar</button>
        </Form>
      </section>
    </EditProfileStyle>
  );
}
export default EditProfile;
