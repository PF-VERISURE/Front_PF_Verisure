import styles from "./InputField.module.css";

function InputField({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}

export default InputField;