import { Clock } from "lucide-react";
import styles from "./WaitlistModal.module.css";

const getInitials = (firstName, lastName) => {
  const f = firstName?.[0] ?? "";
  const l = lastName?.[0] ?? "";
  return (f + l).toUpperCase();
};

const WaitlistModal = ({ waitlist, onClose }) => {
  const list = waitlist || [];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>Lista de espera</h3>
            <p className={styles.count}>{list.length} en espera</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <ul className={styles.list}>
          {list.map((person, index) => (
            <li key={index} className={styles.item}>
              <div className={styles.avatar}>
                {getInitials(person.firstName, person.lastName)}
              </div>
              <div className={styles.info}>
                <span className={styles.name}>{person.firstName} {person.lastName}</span>
                {person.department && (
                  <span className={styles.department}>{person.department}</span>
                )}
              </div>
              <Clock size={16} className={styles.icon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WaitlistModal;
