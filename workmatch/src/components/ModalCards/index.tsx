import * as C from "./modalCardOnStyle";
import * as D from "./modalCardOffStyle";
import Card from "../CardsMyProjects";
import { useContext } from "react";
import { iProject, ProjectContext } from "../../context/ProjectContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

function ModalCards({ myProjects }: any) {
  const haveProject = myProjects.length;
  const { setShowCreateModal, setMyProjectsModal } = useContext(ProjectContext);
  return (
    <C.ContainerModal>
      {haveProject ? (
        <C.DivModal>
          <C.TitleModal>
            <h2>Meus Projetos</h2>
            <button type="button" onClick={() => setMyProjectsModal(false)}>
              X
            </button>
          </C.TitleModal>
          <ul>
            <Swiper>
              {myProjects.map((myProject: iProject) => {
                return (
                  <SwiperSlide key={myProject.id}>
                    <Card project={myProject} />;
                  </SwiperSlide>
                );
              })}
            </Swiper>
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
