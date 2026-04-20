import styles from "./PrimaryButton.module.css";

function PrimaryButton({type, onClick, className, text }) {

  const btnClass = `${styles.base} ${styles[className]}`;

  return (
    <button type={type} className={btnClass} onClick={onClick}>
      {text}
    </button>
  );
}

export default PrimaryButton;