import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../../context/ProjectContext";
import UlMenuDropdown from "./menuDropDashboard";
import { CgProfile } from "react-icons/cg";
import { TbFileStar } from "react-icons/tb";
import { VscFileSymlinkFile } from "react-icons/vsc";
import { IoLogOutOutline } from "react-icons/io5";

function Menu() {
  const { setShowEditModal, setMenuOpen, setMyProjectsModal } =
    useContext(ProjectContext);
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
    setMenuOpen(false);
  }

  return (
    <>
      <UlMenuDropdown>
        <li
          onClick={() => {
            setMenuOpen(false);
            setShowEditModal(true);
          }}
        >
          <CgProfile />
          Editar Perfil
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
            setMyProjectsModal(true);
          }}
        >
          <VscFileSymlinkFile />
          Meus Projetos
        </li>
        <li onClick={logout}>
          <IoLogOutOutline />
          Fazer Logout
        </li>
      </UlMenuDropdown>
    </>
  );
}

export default Menu;
