import styles from "./InputField.module.css";

function InputField({ label, type = "text", name, placeholder, value, onChange, error}) {

  const inputClass = `${styles.input} ${error ? styles.error : ""}`;

  return (
    <section className={styles.field}>
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
        className={inputClass}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </section>
  );
}

export default InputField;