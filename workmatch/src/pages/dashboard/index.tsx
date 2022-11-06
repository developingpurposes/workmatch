import DashboardStyle from "./dashStyle";
import { CgFileAdd as AddPost, CgBell as BellNotificatin } from "react-icons/cg";

import  { BodyDiv, CardProjects } from "./dashStyle";
import Logo from "../../assets/logo.png";



import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";

import api from "../../services";
import imgDefault from "../../assets/default.png";


import { AiFillLike } from "react-icons/ai";

import SearchProject from "../../components/search";

interface iProject {
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
  const [projects, setProjects] = useState<iProject[]>([]);
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

  return (
    <DashboardStyle>
      <header>
      
        <img src={Logo} alt="logo da workMatch" />
      
        <div className="userActionIconsField">
          <AddPost />
          <SearchProject/>
        </div>
        
          <div className="">
            <img src={profile?.avatar_url} alt="" />
            <div className="containerUser">
              <h2>{profile?.name}</h2>
              <p>{profile?.level}</p>
            </div>
          </div>
      </header>

      <BodyDiv>
        
        <CardProjects>
          <ul className="containerProjects">
            {projects.map((project) => (
              <li key={project.id}>
                <div className="userInfos">
                  <img src="" alt="" />
                  <div className="containerUser">
                    <h2>{project.admin?.adminName}</h2>
                    <p>{project.admin?.adminLevel}</p>
                  </div>
                  <div className="containerDate">
                    <p>Data de criação:</p>
                    <span>{project.date}</span>
                  </div>
                </div>

                <div className="containerMain">
                  <div className="containerImgTechs">
                    <img src={imgDefault} alt="imagem padrão" />
                    <span>Techs: JS, ReactJS</span>
                  </div>
                  <div className="containerTextBtn">
                    <p>{project.description}</p>

                    <button>
                      Quero Ajudar
                      <AiFillLike />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardProjects>
      </BodyDiv> 
    </DashboardStyle>
    );
}

export default Dashboard;
