import { createContext, useState, ReactNode, useContext } from "react";
import api from "../services";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { UserContext } from "./UserContext";

const MySwal = withReactContent(Swal);

export interface iProject {
  description: string;
  techs: [];
  amount: string;
  date: string;
  avatar_url: string;
  id: number;
}

interface iProjectContext {

  projects: iProject[];
  setProjects: any;

  createProject: (info: iProject) => void;
  joinProject: (info: string) => void;
  getProjects: () => void;
  deleteProject: (info: string) => void;
  // acceptParticipant: (projectId: string, participantId: string) => void;
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

  const ToastSuccess = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    background: "#168821",
    color: "#FFFFFF",
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });

  const ToastError = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    background: "#B53147",
    color: "#FFFFFF",
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });

  const token = localStorage.getItem("WorkMatch:token");
  const userId = localStorage.getItem("WorkMatch:userId");

  async function getProjects() {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get("/projects");

      setProjects(data);
    } catch (error) {}
  }

  async function createProject(info: iProject) {
    const newInfo = {
      ...info,
      admin: {
        adminId: userId,
        adminName: profile?.name,
        adminLevel: profile?.level,
        adminAvatar: profile?.avatar_url,
      },
      listParticipants: [],
      queueParticipants: [],
    };
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const response = await api.post("/projects", newInfo);
      setProjects([...projects, response.data]);
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Não foi possivel criar o projeto`,
      });
    }
  }

  async function joinProject(projectId: string) {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get(`/projects/${projectId}`);
      const info = { queueParticipants: [...data.queueParticipants, profile] };
      await api.patch(`/projects/${projectId}`, info);
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

  async function deleteProject(projectId: string) {
    try {
      await api.delete(`/projects/${projectId}`);
      ToastSuccess.fire({
        icon: "success",
        iconColor: "#168821",
        title: `Projeto deletado com sucesso`,
      });
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

        createProject,
        joinProject,
        getProjects,
        deleteProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectProvider;
