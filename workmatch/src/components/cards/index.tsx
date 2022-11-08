import * as C from "./cardStyle";
import imgLand from "../../assets/backgroundLandPage1.png";
import { ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";

function Card({ project }: any) {
  const { deleteProject } = useContext(ProjectContext);
  return (
    <C.Card>
      <img src={imgLand} alt="teste" />
      <div className="containerText">
        <h2>{project.name}</h2>
        <h3>{project.description}</h3>
        <p>{project.techs.value}</p>
        <C.ContainerImgTeam>
          {project.listParticipants.map((participant: any) => (
            <li>
              <img src={participant.avatar_url} alt="" />
            </li>
          ))}
        </C.ContainerImgTeam>
        <div className="containerTechs">
          <p>Tecnologias</p>
          <span>{project.techs.value}</span>
        </div>
        <C.ContainerButton>
          <button>Aprovar</button>
          <button onClick={() => deleteProject(project.id)}>Deletar</button>
        </C.ContainerButton>
      </div>
    </C.Card>
  );
}
export default Card;
