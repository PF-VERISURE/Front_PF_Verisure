import styles from "./FormRow.module.css";

function FormRow({ label, icon: Icon, children }) {
  return (
    <div className={styles.row}>
      <span className={styles.label}>
        {Icon && <Icon size={15} className={styles.icon} />}
        {label}
      </span>
      <div className={styles.field}>{children}</div>
    </div>
  );
}

export default FormRow;
