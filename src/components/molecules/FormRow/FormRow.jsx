import styles from "./FormRow.module.css";

function FormRow({ label, children }) {
  return (
    <div className={styles.row}>
      <span className={styles.label}>{label}</span>
      <div className={styles.field}>{children}</div>
    </div>
  );
}

export default FormRow;
