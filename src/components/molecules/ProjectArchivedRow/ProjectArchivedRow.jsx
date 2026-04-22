import { useState } from "react";
import ParticipantsModal from "../ParticipantsModal/ParticipantsModal";
import ProjectInfoModal from "../ProjectInfoModal/ProjectInfoModal";
import styles from "./ProjectArchivedRow.module.css";

const ProjectArchivedRow = ({ project }) => {
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

export default ProjectArchivedRow;
