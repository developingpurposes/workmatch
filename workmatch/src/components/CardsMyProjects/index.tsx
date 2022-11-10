import * as C from "./cardStyle";
import { iProject, ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";
import { iUserProfile } from "../../context/UserContext";
import RenderIcon from "../RenderIcon/index";

interface iCard {
  project: iProject;
}

function Card({ project }: iCard) {
  const { deleteProject } = useContext(ProjectContext);

  return (
    <C.Card>
      <img className="imgProject" src={project.projectImg} alt="teste" />
      <div className="containerTitle">
        <h2>{project.name}</h2>
        <h3>{project.description}</h3>
      </div>
      <div className="containerText">
        {project.listParticipants.length > 0 ? (
          <C.ContainerImgTeam>
            {project.listParticipants.map(
              (participant: iUserProfile, index) => (
                <li className="imgTeam" key={index}>
                  <img src={participant.avatar_url} alt="imgProfile" />
                </li>
              )
            )}
          </C.ContainerImgTeam>
        ) : (
          ""
        )}
        <div className="containerTechs">
          <p>Tecnologias: </p>
          <RenderIcon arrTechs={project.techs} />
        </div>
      </div>
      <C.ContainerButton>
        <button onClick={() => deleteProject(project.id)}>Deletar</button>
      </C.ContainerButton>
    </C.Card>
  );
}
export default Card;
