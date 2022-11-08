import { createContext, useState, ReactNode, useContext } from "react";
import api from "../services";
import imgLand from "../assets/default.png";
import { ToastError, ToastSuccess } from "../services/toast";
import { iUserProfile, UserContext } from "./UserContext";

export interface iTechs {
  value: string;
  label: string;
}

export interface iProject {
  name: string;
  description: string;
  techs: iTechs[];
  amount: string;
  date: string;
  projectImg: string;
  id: number;
  queueParticipants: iUserProfile[];
  listParticipants: iUserProfile[];
  admin: {
    adminId: number;
    adminName: string;
    adminLevel: string;
    adminAvatar: string;
  };
}

interface iProjectContext {
  projects: iProject[];
  setProjects: React.Dispatch<React.SetStateAction<iProject[]>>;
  createProject: (info: iProject) => void;
  joinProject: (info: number) => void;
  deleteProject: (info: number) => void;
  acceptParticipant: (projectId: string, participantId: string) => void;
  showCreateModal: boolean;
  setShowCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  showEditModal: boolean;
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  myProjectsModal: boolean;
  setMyProjectsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectTechs: React.Dispatch<React.SetStateAction<{}>>;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  myProjects: iProject[];
  setMyProjects: React.Dispatch<React.SetStateAction<iProject[]>>;
}

interface iProjectProviderChildren {
  children: ReactNode;
}

export const ProjectContext = createContext<iProjectContext>(
  {} as iProjectContext
);

function ProjectProvider({ children }: iProjectProviderChildren) {
  const { profile } = useContext(UserContext);
  const [projects, setProjects] = useState<iProject[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [myProjectsModal, setMyProjectsModal] = useState(false);
  const [selectTechs, setSelectTechs] = useState({});
  const [image, setImage] = useState(imgLand);
  const [myProjects, setMyProjects] = useState<iProject[]>([]);

  const token = localStorage.getItem("WorkMatch:token");
  const userId = localStorage.getItem("WorkMatch:userId");

  async function createProject(info: iProject) {
    const newInfo = {
      ...info,
      projectImg: image,
      techs: selectTechs,
      admin: {
        adminId: userId,
        adminName: profile.name,
        adminLevel: profile.level,
        adminAvatar: profile.avatar_url,
      },
      listParticipants: [],
      queueParticipants: [],
    };
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const response = await api.post("/projects", newInfo);
      setMyProjects([...myProjects, response.data]);
      setShowCreateModal(false);
      ToastSuccess.fire({
        icon: "success",
        iconColor: "#168821",
        title: `Projeto criado com sucesso`,
      });
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Não foi possivel criar o projeto`,
      });
    }
  }

  async function joinProject(projectId: number) {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get(`/projects/${projectId}`);
      const info = { queueParticipants: [...data.queueParticipants, profile] };
      await api.patch(`/projects/${projectId}`, info);
      ToastSuccess.fire({
        icon: "success",
        iconColor: "#168821",
        title: `você esta na lista de espera para aprovação`,
      });
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Não foi possivel criar o projeto`,
      });
    }
  }

  async function acceptParticipant(projectId: string, participantId: string) {
    const { data } = await api.get(`/projects/${projectId}`);
    const queue: [] = data.queueParticipants;
    const participants = data.listParticipants;
    const participantAccepted = queue.find(({ id }) => id === participantId);
    const notAcceptedParticipants = queue.filter(
      (acceptedParticipant) => !participantAccepted
    );

    try {
      const info = {
        listParticipants: [...participants, participantAccepted],
        queueParticipants: [notAcceptedParticipants],
      };
      await api.patch(`/projects/${projectId}`, info);
    } catch (error) {}
  }

  async function deleteProject(projectId: number) {
    try {
      await api.delete(`/projects/${projectId}`);
      ToastSuccess.fire({
        icon: "success",
        iconColor: "#168821",
        title: `Projeto deletado com sucesso`,
      });
      const notDeleted = myProjects.filter(
        (notDeletedProjects) => notDeletedProjects.id !== projectId
      );
      setMyProjects(notDeleted);
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Não foi possivel deletar o projeto`,
      });
    }
  }

  return (
    <ProjectContext.Provider
      value={{
        projects,
        setProjects,
        acceptParticipant,
        createProject,
        joinProject,
        deleteProject,
        showCreateModal,
        setShowCreateModal,
        showEditModal,
        setShowEditModal,
        menuOpen,
        setMenuOpen,
        myProjectsModal,
        setMyProjectsModal,
        setSelectTechs,
        setImage,
        image,
        myProjects,
        setMyProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectProvider;
