import styles from "./TextareaField.module.css";

function TextareaField({ name, placeholder, value, onChange, rows = 4 }) {
  return (
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className={styles.textarea}
    />
  );
}

export default TextareaField;
