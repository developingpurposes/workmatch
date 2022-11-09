import QueueNotificationStyle from "./QueueNotificationStyle";
import { useContext } from "react";
import { iProject, ProjectContext } from "../../context/ProjectContext";
import { iUserProfile } from "../../context/UserContext";
import RenderIcon from "../renderIcon";

function QueueNotification() {
  const {
    myProjects,
    setShowQueueModal,
    acceptParticipant,
    rejectParticipant,
  } = useContext(ProjectContext);

  console.log(myProjects);
  return (
    <QueueNotificationStyle>
      <section>
        <div className="modalHeader">
          <h3>Colaboradores na fila</h3>
          <span onClick={() => setShowQueueModal(false)}>X</span>
        </div>

        <ul className="projectList">
          {myProjects.map((project: iProject) => (
            <li key={project.id}>
              <div className="projectHeader">
                <h2>{project.name}</h2>
              </div>
              {project.queueParticipants.length ? (
                <ul className="participantList">
                  {project.queueParticipants.map(
                    (participant: iUserProfile) => (
                      <>
                        <h5>Colaborador:</h5>
                        <li key={participant.id}>
                          <div className="participantInfo">
                            <img
                              src={participant.avatar_url}
                              alt={participant.name}
                            />
                            <div>
                              <h4>{participant.userName}</h4>
                              <p>{participant.level}</p>
                            </div>
                          </div>
                          <div className="techIcon">
                            <p>Tecnologias: </p>
                            <RenderIcon arrTechs={participant.techs} />
                          </div>

                          <div className="buttonsDiv">
                            <button
                              type="button"
                              onClick={() =>
                                acceptParticipant(project.id, participant.id)
                              }
                            >
                              Aceitar
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                rejectParticipant(project.id, participant.id)
                              }
                            >
                              Rejeitar
                            </button>
                          </div>
                        </li>
                      </>
                    )
                  )}
                </ul>
              ) : (
                <div className="container">
                  <h5>
                    Não há nenhum candidato esperando para participar deste
                    projeto =(
                  </h5>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </QueueNotificationStyle>
  );
}
export default QueueNotification;
