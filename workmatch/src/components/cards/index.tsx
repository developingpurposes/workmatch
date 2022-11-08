import * as C from "./cardStyle";
import imgLand from "../../assets/backgroundLandPage1.png";
import { iProject, ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";
import { iUserProfile } from "../../context/UserContext";

interface iCard {
  project: iProject;
}

function Card({ project }: iCard) {
  const { deleteProject } = useContext(ProjectContext);
  console.log(project);
  return (
    <C.Card>
      <img src={imgLand} alt="teste" />
      <div className="containerText">
        <h2>{project.name}</h2>
        <h3>{project.description}</h3>

        <C.ContainerImgTeam>
          {project.listParticipants.map((participant: iUserProfile) => (
            <li key={project.listParticipants.length}>
              <img src={participant.avatar_url} alt="" />
            </li>
          ))}
        </C.ContainerImgTeam>
        <div className="containerTechs">
          <p>Tecnologias: </p>
          {project.techs.map((tech) => (
            <p key={tech.label}>{tech.value}</p>
          ))}
        </div>
        <C.ContainerButton>
          <button onClick={() => deleteProject(project.id)}>Deletar</button>
        </C.ContainerButton>
      </div>
    </C.Card>
  );
}
export default Card;
