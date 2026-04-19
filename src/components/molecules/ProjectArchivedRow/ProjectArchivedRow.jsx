import { useState } from "react";
import ParticipantsModal from "../ParticipantsModal/ParticipantsModal";
import styles from "./ProjectArchivedRow.module.css";

const ProjectArchivedRow = ({ gnoName, title, participants, totalApplications, totalVolunteers }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.row}>
        <span>{gnoName}</span>
        <span>{title}</span>
        <button className={styles.verBtn} onClick={() => setShowModal(true)}>
          Ver participantes
        </button>
        <span>{totalApplications}/{totalVolunteers}</span>
      </div>
      {showModal && (
        <ParticipantsModal
          participants={participants}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ProjectArchivedRow;
