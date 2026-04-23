import styles from "./ModalAlert.module.css";

function ModalAlert({ text, actions = [],  onClose  }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <p className={styles.text}>{text}</p>

        <div className={styles.actions}>
          {actions.map((action, i) => (
            <button key={i} onClick={action.onClick} className={styles.button}>
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModalAlert;