import { createContext, useState, ReactNode } from "react";
import api from "../services";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export interface iProject {
  description: string;
  techs: string;
  email: string;
  date: string;
  verification: string;
}

interface iProjectContext {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  createProject: (info: iProject) => void;
}

interface iProjectProviderChildren {
  children: ReactNode;
}

export const ProjectContext = createContext<iProjectContext>(
  {} as iProjectContext
);

function ProjectProvider({ children }: iProjectProviderChildren) {
  const [modal, setModal] = useState(false);
  const [projects, setProjects] = useState<iProject[]>([]);

  const token = localStorage.getItem("WorkMatch:Token");

  async function getProject() {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get("/projects");

      setProjects(data);
    } catch (error) {}
  }

  async function createProject(info: iProject) {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const response = await api.post("/projects", info);

      setModal(false);
      setProjects([...projects, response.data]);
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Não foi possivel criar o projeto`,
      });
    }
  }

  async function editProject(info: iProject) {}

  async function deleteProject(projectId: string) {
    const newArrayProjects = ;
  }

  return (
    <ProjectContext.Provider value={{ modal, setModal, createProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectProvider;
