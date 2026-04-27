import styles from "./TextareaField.module.css";

function TextareaField({ name, placeholder, value, onChange, onBlur, rows = 4, isError }) {
  return (
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      rows={rows}
      className={`${styles.textarea} ${isError ? styles.error : ""}`}
    />
  );
}

export default TextareaField;
