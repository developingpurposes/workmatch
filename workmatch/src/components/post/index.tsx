import PostStyle from "./postStyle";
import imgPostDf from "../../assets/default.png";
import {
  SiJavascript as JS,
  SiCss3 as CSS,
  SiReact as React,
} from "react-icons/si";
import { FaJava as Java, FaHandsHelping as Like } from "react-icons/fa";
import { iProject, ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";

interface iPosts {
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
              <img src={imgPostDf} alt="imagem padrão" />
              <div className="containerTechs">
                <JS/>
                <Java/>
                <CSS/>
                <React/>
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
