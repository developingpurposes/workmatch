import * as C from "./modalCardOnStyle";
import * as D from "./modalCardOffStyle";
import Card from "../cards";
import { useContext, useState } from "react";
import { ProjectContext } from "../../context/ProjectContext";

function ModalCards() {
  const { deleteProject, projects, setMyProjectsModal } =
    useContext(ProjectContext);
  //const { myProjects, setMyProjects } = useState(null);
  const myId = localStorage.getItem("WorkMatch:userId");
  const techs = false;

  // function getMyProjects() {
  //   const myProjects = projects.filter(
  //     (acceptedParticipant) => projects.admin.adminId === myId
  //   );
  //   return myProjects;
  // }

  return (
    <C.ContainerModal>
      {techs ? (
        <C.DivModal>
          <C.TitleModal>
            <h2>Meus Projetos</h2>
            <button type="button">X</button>
          </C.TitleModal>
          {/* <ul>
            {myProjects.map((myProject) => {
              return (
                <Card
                  key={myProjects.id}
                  project={myProject}
                  onDelete={deleteProject}
                />                
              );
            })}
          </ul> */}
        </C.DivModal>
      ) : (
        <D.DivModal>
          <C.TitleModal>
            <h2>Meus Projetos</h2>
            <button type="button" onClick={() => setMyProjectsModal(false)}>
              X
            </button>
          </C.TitleModal>
          <div className="container">
            <h2>Ops! Você ainda não possui nenhum projeto</h2>
            <button className="startButton">Começar um agora</button>
          </div>
        </D.DivModal>
      )}
    </C.ContainerModal>
  );
}

export default ModalCards;