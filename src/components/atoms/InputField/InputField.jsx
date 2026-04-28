import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import styles from "./InputField.module.css";

function InputField({ label, type = "text", name, placeholder, value, onChange, onBlur, error, showToggle }) {
  const [visible, setVisible] = useState(false);
  const inputType = showToggle ? (visible ? "text" : "password") : type;

  return (
    <section className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      <div className={styles.inputWrapper}>
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`${styles.input} ${error ? styles.error : ""}`}
        />
        {showToggle && (
          <button
            type="button"
            className={styles.eyeBtn}
            onClick={() => setVisible((v) => !v)}
            tabIndex={-1}
          >
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {error && <span className={styles.errorText}>{error}</span>}
    </section>
  );
}

export default InputField;
