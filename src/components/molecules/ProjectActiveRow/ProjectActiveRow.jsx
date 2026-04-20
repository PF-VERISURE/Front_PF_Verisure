import { useState } from "react";
import ParticipantsModal from "../ParticipantsModal/ParticipantsModal";
import ProjectInfoModal from "../ProjectInfoModal/ProjectInfoModal";
import styles from "./ProjectActiveRow.module.css";

const ProjectActiveRow = ({ project }) => {
  const [showParticipants, setShowParticipants] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className={styles.row} onClick={() => setShowInfo(true)}>
        <span>{project.gnoName || "Sin nombre de ONG"}</span>
        <span>{project.title || "Sin título de proyecto"}</span>
        <button className={styles.verBtn} onClick={(e) => { e.stopPropagation(); setShowParticipants(true); }}>
          Ver participantes
        </button>
        <span>{project.totalApplications}/{project.totalVolunteers}</span>
        <button className={styles.cerrarBtn} onClick={(e) => e.stopPropagation()}>Cerrar el programa</button>
      </div>
      {showParticipants && (
        <ParticipantsModal
          participants={project.participants}
          onClose={() => setShowParticipants(false)}
        />
      )}
      {showInfo && (
        <ProjectInfoModal
          project={project}
          onClose={() => setShowInfo(false)}
        />
      )}
    </>
  );
};

export default ProjectActiveRow;
