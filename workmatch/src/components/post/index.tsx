import PostStyle from "./postStyle";
import { FaHandsHelping as Like } from "react-icons/fa";
import { iProject, ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";
import RenderIcon from "../renderIcon";

export interface iPosts {
  projects: iProject[];
}

function Post({ projects }: iPosts) {
  const { joinProject } = useContext(ProjectContext);

  return (
    <PostStyle className="container">
      <ul>
        {projects.map((project: iProject) => (
          <li key={project.id}>
            <div className="containerImgPostAndTechs">
              <img src={project.projectImg} alt="imagem padrão" />
              <div className="containerTechs">
                <RenderIcon arrTechs={project.techs} />
              </div>
            </div>
            <div className="containerInfoPost">
              <div className="containerUserPost">
                <div className="infoUser">
                  <h2>{project.admin.adminName}</h2>
                  <p>{project.admin.adminLevel}</p>
                </div>
                <div className="containerDate">
                  <p>{project.date}</p>
                </div>
              </div>

              <div className="containerDescription">
                <p>{project.description}</p>

                <button onClick={() => joinProject(project.id)}>
                  Quero Ajudar <Like />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </PostStyle>
  );
}

export default Post;
