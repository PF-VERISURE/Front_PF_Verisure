import styles from "./PrimaryButton.module.css";

function PrimaryButton({ text, type = "button" }) {
  return (
    <button type={type} className={styles.button}>
      {text}
    </button>
  );
}

export default PrimaryButton;