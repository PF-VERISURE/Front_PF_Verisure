import styles from "./ModalMetrics.module.css";

function ModalMetrics({ text, actions = [],  onClose  }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.text}>{text}</div>

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

export default ModalMetrics;