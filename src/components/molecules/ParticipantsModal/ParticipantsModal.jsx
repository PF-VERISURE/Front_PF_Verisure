import styles from "./ParticipantsModal.module.css";

const ParticipantsModal = ({ participants, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>Participantes</h3>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <ul className={styles.list}>
          {(participants || []).map((nombre, index) => (
            <li key={index} className={styles.item}>{nombre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParticipantsModal;
