import Header, { BodyDiv, CardProjects } from "./dashStyle";
import Logo from "../../assets/logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { IconContext } from "react-icons";
import { AiOutlinePlus } from "react-icons/ai";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import "./bodyDash.css";
import api from "../../services";
import imgDefault from "../../assets/default.png";

import { AiFillLike } from "react-icons/ai";

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
  const token = localStorage.getItem("WorkMatch:token");
  const [projects, setProjects] = useState<iProject[]>([]);

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
    <>
      <Header>
        <div>
          <img src={Logo} alt="logo" />
          <IconContext.Provider
            value={{ color: "white", className: "iconSearch" }}
          >
            <div className="divIcons">
              <AiOutlinePlus />
              <BiSearchAlt2 />
            </div>
          </IconContext.Provider>
          <div className="userInfos">
            <img src={profile?.avatar_url} alt="" />
            <div className="containerUser">
              <h2>{profile?.name}</h2>
              <p>{profile?.level}</p>
            </div>
          </div>
        </div>
      </Header>
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
    </>
  );
}

export default Dashboard;
