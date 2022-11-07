import * as C from "./modalCardOnStyle";
import * as D from "./modalCardOffStyle";
import Card from "../cards";
import { useContext, useEffect, useState } from "react";
import { iProject, ProjectContext } from "../../context/ProjectContext";

function ModalCards() {
  const { deleteProject, projects, setShowCreateModal, setMyProjectsModal } =
    useContext(ProjectContext);
  const [myProjects, setMyProjects] = useState<iProject[]>([]);
  const myId = localStorage.getItem("WorkMatch:userId");
  const techs = false;

  // useEffect(() => {
  //   getProjects();
  //   console.log(projects);
  // }, [getProjects, projects]);

  function getMyProjects() {
    const myProjectsfilter = projects.filter(
      (acceptedParticipant) => acceptedParticipant.admin.adminId === myId
    );

    setMyProjects(myProjectsfilter);
  }

  return (
    <C.ContainerModal>
      {techs ? (
        <C.DivModal>
          <C.TitleModal>
            <h2>Meus Projetos</h2>
            <button type="button">X</button>
          </C.TitleModal>
          <ul>
            {myProjects.map((myProject) => {
              return (
                <Card
                  key={myProject.id}
                  tech={myProject}
                  onDelete={deleteProject}
                  onEdit={techs}
                />
              );
            })}
          </ul>
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
            <button
              className="startButton"
              onClick={() => {
                setMyProjectsModal(false);
                setShowCreateModal(true);
              }}
            >
              Começar um agora
            </button>
          </div>
        </D.DivModal>
      )}
    </C.ContainerModal>
  );
}

export default ModalCards;
