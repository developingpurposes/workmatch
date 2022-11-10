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
  techs: iTechs[] | [];
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
  acceptParticipant: (projectId: number, participantId: number) => void;
  showCreateModal: boolean;
  setShowCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  showQueueModal: boolean;
  setShowQueueModal: React.Dispatch<React.SetStateAction<boolean>>;
  showEditModal: boolean;
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  myProjectsModal: boolean;
  setMyProjectsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectTechs: React.Dispatch<React.SetStateAction<iTechs[]>>;
  selectTechs: iTechs[];
  setImage: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  myProjects: iProject[];
  setMyProjects: React.Dispatch<React.SetStateAction<iProject[]>>;
  rejectParticipant: (projectId: number, participantId: number) => void;
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
  const [showQueueModal, setShowQueueModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [myProjectsModal, setMyProjectsModal] = useState(false);
  const [selectTechs, setSelectTechs] = useState<iTechs[]>([]);
  const [image, setImage] = useState(imgLand);
  const [myProjects, setMyProjects] = useState<iProject[]>([]);

  const token = localStorage.getItem("WorkMatch:token");
  const userId = localStorage.getItem("WorkMatch:userId");

  async function createProject(info: iProject) {
    let newTechs = selectTechs;

    if (!Array.isArray(selectTechs)) {
      newTechs = [];
    }

    const newInfo = {
      ...info,
      projectImg: image,
      techs: newTechs,
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
      const NotParticipatedProjects = projects.filter(
        (project: iProject) => project.id !== projectId
      );

      setProjects(NotParticipatedProjects);

      ToastSuccess.fire({
        icon: "success",
        iconColor: "#168821",
        title: `Você esta na lista de espera para aprovação`,
      });
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Não foi possivel entrar para a lista de espera`,
      });
    }
  }

  async function acceptParticipant(projectId: number, participantId: number) {
    const { data } = await api.get(`/projects/${projectId}`);
    const queue: [] = data.queueParticipants;
    const participants = data.listParticipants;
    const participantAccepted = queue.find(({ id }) => id === participantId);
    const notAcceptedParticipants = queue.filter(
      ({ id }) => id !== participantId
    );

    try {
      const info = {
        listParticipants: [...participants, participantAccepted],
        queueParticipants: [...notAcceptedParticipants],
      };
      await api.patch(`/projects/${projectId}`, info);
      ToastSuccess.fire({
        icon: "success",
        iconColor: "#168821",
        title: `Você aceitou o participante`,
      });

      setShowQueueModal(false);
      const { data } = await api.get("/projects");
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Não foi possível aceitar o participante`,
      });
    }
  }

  async function rejectParticipant(projectId: number, participantId: number) {
    const { data } = await api.get(`/projects/${projectId}`);
    const queue: [] = data.queueParticipants;
    const notAcceptedParticipants = queue.filter(
      ({ id }) => id !== participantId
    );
    try {
      const info = {
        queueParticipants: [...notAcceptedParticipants],
      };
      await api.patch(`/projects/${projectId}`, info);
      ToastSuccess.fire({
        icon: "success",
        iconColor: "#168821",
        title: `Você rejeitou o participante`,
      });

      setShowQueueModal(false);
      const { data } = await api.get("/projects");
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Não foi possível rejeitar o participante`,
      });
    }
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
        rejectParticipant,
        createProject,
        joinProject,
        deleteProject,
        showCreateModal,
        setShowCreateModal,
        showQueueModal,
        setShowQueueModal,
        showEditModal,
        setShowEditModal,
        menuOpen,
        setMenuOpen,
        myProjectsModal,
        setMyProjectsModal,
        setSelectTechs,
        selectTechs,
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
