import QueueNotificationStyle from "./QueueNotificationStyle";
import { useContext } from "react";
import { iProject, ProjectContext } from "../../context/ProjectContext";
import { iUserProfile } from "../../context/UserContext";

function QueueNotification() {
  const {
    myProjects,
    setShowQueueModal,
    acceptParticipant,
    rejectParticipant,
  } = useContext(ProjectContext);

  return (
    <QueueNotificationStyle>
      <section>
        <div>
          <h3>Colaboradores na fila</h3>
          <span onClick={() => setShowQueueModal(false)}>X</span>
        </div>
        <ul className="projectList">
          {myProjects.map((project: iProject) => (
            <li key={project.id}>
              <div className="projectHeader">
                <h2>{project.name}</h2>
              </div>
              <ul className="participantList">
                {project.queueParticipants.map((participant: iUserProfile) => (
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
                      git
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
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </QueueNotificationStyle>
  );
}
export default QueueNotification;
