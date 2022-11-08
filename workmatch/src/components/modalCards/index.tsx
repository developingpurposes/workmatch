import * as C from "./modalCardOnStyle";
import * as D from "./modalCardOffStyle";
import Card from "../cards";
import { useContext } from "react";
import { iProject, ProjectContext } from "../../context/ProjectContext";

function ModalCards({ myProjects }: any) {
  const teste = true;
  const { setShowCreateModal, setMyProjectsModal } = useContext(ProjectContext);
  return (
    <C.ContainerModal>
      {teste ? (
        <C.DivModal>
          <C.TitleModal>
            <h2>Meus Projetos</h2>
            <button type="button" onClick={() => setMyProjectsModal(false)}>
              X
            </button>
          </C.TitleModal>
          <ul>
            {myProjects.map((myProject: iProject) => {
              return <Card key={myProject.id} project={myProject} />;
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
