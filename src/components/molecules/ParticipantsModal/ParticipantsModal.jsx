import { ChevronRight } from "lucide-react";
import styles from "./ParticipantsModal.module.css";

const getInitials = (name) => {
  const parts = name.trim().split(" ");
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return parts[0][0].toUpperCase();
};

const ParticipantsModal = ({ participants, onClose }) => {
  const list = participants || [];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>Participantes</h3>
            <p className={styles.count}>{list.length} participantes</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <ul className={styles.list}>
          {list.map((nombre, index) => (
            <li key={index} className={styles.item}>
              <div className={styles.avatar}>{getInitials(nombre)}</div>
              <span className={styles.name}>{nombre}</span>
              <ChevronRight size={18} className={styles.arrow} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParticipantsModal;
