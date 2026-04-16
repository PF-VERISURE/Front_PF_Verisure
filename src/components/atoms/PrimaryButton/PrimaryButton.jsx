import styles from "./PrimaryButton.module.css";

function PrimaryButton({ text, type, onClick, className }) {

  const btnClass = `${styles.base} ${styles[className]}`;

  return (
    <button type={type} className={btnClass} onClick={onClick}>
      {text}
    </button>
  );
}

export default PrimaryButton;