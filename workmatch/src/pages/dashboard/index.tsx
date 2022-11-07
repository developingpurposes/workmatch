import { DashboardStyle, HeaderDashboard } from "./dashStyle";
import {
  CgFileAdd as AddPost,
  CgBell as BellNotificatin,
} from "react-icons/cg";
import Logo from "../../assets/logo.png";

import imgUserDf from "../../assets/account.png";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import api from "../../services";
import Menu from "../../components/menuDropDashboard";
import Post from "../../components/post";

import ModalCreateProjects from "../../components/modalCreateProjects";
import { ProjectContext } from "../../context/ProjectContext";
import EditProfile from "../../components/modalEditProfile";
import ModalCards from "../../components/modalCards";



export interface iProject {
  description: string;
  techs: [];
  amount: string;
  date: string;
  avatar_url: string | null;
  id: number;
  admin: {
    adminId: string;
    adminName: string;
    adminLevel: string;
    adminAvatar: string | null;
  };
}

function Dashboard() {
  const { profile } = useContext(UserContext);
  const {
    showCreateModal,
    setShowCreateModal,
    showEditModal,
    menuOpen,
    setMenuOpen,
    myProjectsModal,
  } = useContext(ProjectContext);
  const [projects, setProjects] = useState<iProject[]>([] as iProject[]);
  const token = localStorage.getItem("WorkMatch:token");

  useEffect(() => {
    async function getProjects() {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get("/projects");
        setProjects(data);
      } catch (error) {}
    }
    getProjects();
  }, []);

  function openOrClose() {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  return (
    <DashboardStyle>
      {showEditModal ? <EditProfile /> : null}
      {showCreateModal ? <ModalCreateProjects handleModal techs /> : null}
      {myProjectsModal ? <ModalCards /> : null}
      <HeaderDashboard>
        <div className="container containerHeader">
          <img src={Logo} alt="logo da workMatch" />

          <div className="userActionIconsField ">
            <button onClick={() => setShowCreateModal(true)}>
              <AddPost className="svgHover" />
            </button>
            <button>
              <BellNotificatin className="svgHover" />
            </button>
          </div>

          <div className="userProfile">
            {profile?.avatar_url ? (
              <img
                src={profile?.avatar_url}
                alt={profile?.userName}
                onClick={() => openOrClose()}
              />
            ) : (
              <img
                src={imgUserDf}
                alt="ilustração de usuario"
                onClick={() => openOrClose()}
              />
            )}
            {menuOpen ? <Menu /> : null}

            <div className="infoUser">
              <h2>{profile?.userName}</h2>

              {profile?.level ? <p>{profile?.level}</p> : <p>Está sem nivel</p>}
            </div>
          </div>
        </div>
      </HeaderDashboard>


      <Post projects={projects} />

    </DashboardStyle>
  );
}

export default Dashboard;
