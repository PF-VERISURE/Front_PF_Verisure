import styles from "./SecondaryButton.module.css";

function SecondaryButton({ text, type = "button", onClick }) {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
}

export default SecondaryButton;
