import * as C from "./cardStyle";
import imgLand from "../../assets/backgroundLandPage1.png";
import { iProject, ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";

function Card({ project }: any) {
  const { deleteProject } = useContext(ProjectContext);
  return (
    <C.Card>
      <img src={imgLand} alt="teste" />
      <div className="containerText">
        <h2>{project.name}</h2>
        <h3>{project.description}</h3>

        <C.ContainerImgTeam>
          {project.listParticipants.map((participant: any) => (
            <li>
              <img src={participant.avatar_url} alt="" />
            </li>
          ))}
        </C.ContainerImgTeam>
        <div className="containerTechs">
          <p>Tecnologias: </p>
          {project.techs.map((tech: any) => (
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
