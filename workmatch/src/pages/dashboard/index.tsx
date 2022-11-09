import { DashboardStyle, HeaderDashboard } from "./dashStyle";
import {
  CgFileAdd as AddPost,
  CgBell as BellNotificatin,
} from "react-icons/cg";
import Logo from "../../assets/logo.png";
import imgUserDf from "../../assets/account.png";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect } from "react";
import api from "../../services";
import Menu from "../../components/menuDropDashboard";
import Post from "../../components/post";
import ModalCards from "../../components/modalCards";
import ModalCreateProjects from "../../components/modalCreateProjects";
import { ProjectContext } from "../../context/ProjectContext";
import EditProfile from "../../components/modalEditProfile";
import QueueNotification from "../../components/queueNotification";

interface iDash {
  admin: {
    adminId: string;
  };
}

function Dashboard() {
  const { profile } = useContext(UserContext);
  const {
    showCreateModal,
    setShowCreateModal,
    showQueueModal,
    setShowQueueModal,
    showEditModal,
    menuOpen,
    setMenuOpen,
    myProjectsModal,
    projects,
    myProjects,
    setMyProjects,
    setProjects,
  } = useContext(ProjectContext);
  const token = localStorage.getItem("WorkMatch:token");

  useEffect(() => {
    async function getProjects() {
      const id = localStorage.getItem("WorkMatch:userId");
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get("/projects");
        const myProjectsfilter = data.filter(
          (project: iDash) => project.admin.adminId === id
        );
        const otherFilter = data.filter(
          (project: iDash) => project.admin.adminId !== id
        );
        setMyProjects(myProjectsfilter);

        setProjects(otherFilter);
      } catch (error) {}
    }
    getProjects();
  }, [token, setMyProjects, setProjects, showQueueModal]);

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
      {showCreateModal ? <ModalCreateProjects /> : null}
      {showQueueModal ? <QueueNotification /> : null}
      {myProjectsModal ? <ModalCards myProjects={myProjects} /> : null}
      <HeaderDashboard>
        <div className="container containerHeader">
          <img src={Logo} alt="logo da workMatch" />

          <div className="userActionIconsField ">
            <button onClick={() => setShowCreateModal(true)}>
              <AddPost className="svgHover" />
            </button>
            <button onClick={() => setShowQueueModal(true)}>
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
