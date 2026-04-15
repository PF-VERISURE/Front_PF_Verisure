import styles from "./SelectField.module.css";

function SelectField({ name, value, onChange, options = [], placeholder }) {
  return (
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={styles.select}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default SelectField;
