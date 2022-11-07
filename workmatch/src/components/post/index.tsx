import PostStyle from "./postStyle";
import imgPostDf from "../../assets/default.png";
import {
  SiJavascript as JS,
  SiCss3 as CSS,
  SiReact as React,
} from "react-icons/si";
import { FaJava as Java, FaHandsHelping as Like } from "react-icons/fa";
import { ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";

function Post({ projects }: any) {
  const { joinProject } = useContext(ProjectContext);

  return (
    <PostStyle className="container">
      <ul>
        {projects.map((project: any) => (
          <li key={project.id}>
            <div className="containerImgPostAndTechs">
              <img src={imgPostDf} alt="imagem padrão" />
              <div className="containerTechs">
                <JS />
                <Java />
                <CSS />
                <React />
              </div>
            </div>
            <div className="containerInfoPost">
              <div className="containerUserPost">
                <div className="infoUser">
                  <h2>Nickname</h2>
                  <p>FrontEnd-Pleno</p>
                </div>
                <div className="containerDate">
                  <p>{project.date}</p>
                </div>
              </div>

              <div className="containerDescription">
                <p>{project.description}</p>

                <button onClick={() => joinProject(project.id)}>
                  {" "}
                  Quero Ajudar <Like />{" "}
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
