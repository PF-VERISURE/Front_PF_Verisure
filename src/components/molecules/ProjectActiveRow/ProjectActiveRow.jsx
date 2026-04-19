import { useState } from "react";
import ParticipantsModal from "../ParticipantsModal/ParticipantsModal";
import styles from "./ProjectActiveRow.module.css";

const ProjectActiveRow = ({ gnoName, title, participants, totalApplications, totalVolunteers }) => {
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
        <button className={styles.cerrarBtn}>Cerrar el programa</button>
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

export default ProjectActiveRow;
